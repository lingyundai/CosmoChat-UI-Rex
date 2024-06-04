import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ChatHistory from "../../components/ChatHistory";
import api from "../../api/sessions";
import useMediaQuery from "@mui/material/useMediaQuery";

const EndedChats = () => {
  const [sessions, setSessions] = useState([]);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        if (response && response.data) {
          setSessions(response.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    fetchSessions();
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  };

  const handleDelete = async (id) => {
    try {
      const ID = id.toString();
      await api.delete(`/sessions/${ID}`);
      setSessions(sessions.filter((session) => session.id !== ID));
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <Grid container style={{ display: matches ? "none" : "block" }}>
      <Grid container style={{ padding: "70px 10px" }}>
        {sessions.map((session) =>
          session.isSessionEnded ? (
            <ChatHistory
              key={session.id}
              id={session.id}
              date={session.date}
              lasttext={
                session.chats.length
                  ? session.chats[session.chats.length - 1].ReX[
                      session.chats[session.chats.length - 1].ReX.length - 1
                    ]
                  : ""
              }
              sessionEnded={session.isSessionEnded}
              handleDelete={() => handleDelete(session.id)}
              isActivity={false}
              chatsLength={session.chats.length}
            />
          ) : null
        )}
      </Grid>
    </Grid>
  );
};

export default EndedChats;