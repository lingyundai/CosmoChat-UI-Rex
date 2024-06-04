import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Images from "../../constants/images";
import AllStyles from "../../styles/home";
import api from "../../api/sessions";
import ChatHistory from "../../components/ChatHistory";
import { useNavigate } from "react-router";
import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {
  const [sessions, setSessions] = useState([]);
  const navigator = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(true);
  const reXIntro = [
    "Hello Andrew, I am ReX. 😁",
    "What aspect of your career would you like guidance on?",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const controller = new AbortController();
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions", {
          signal: controller.signal,
        });
        setSessions(response.data.reverse());
        setLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
      return () => controller?.abort();
    };
    fetchSessions();
  }, []);
  
  const handleSubmit = async () => {
    const id = sessions.length
      ? (parseInt(sessions[0].id) + 1).toString()
      : "1";
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = months[month] + " " + day + ", " + year;
    const chat = [{ ReX: reXIntro }];
    const isSessionEnded = false;

    const newSession = {
      id: id,
      date: formattedDate,
      chats: chat,
      isSessionEnded: isSessionEnded,
    };

    try {
      if (parseInt(id) > 1) {
        const lastSessionid = (parseInt(id) - 1).toString();
        const activeSession = sessions.filter(
          (session) => session.id == lastSessionid
        );
        activeSession[0].isSessionEnded = true;
        const res = await api.patch(
          `/sessions/${lastSessionid}`,
          activeSession[0]
        );
        setSessions(
          sessions.map((session) =>
            session.id == lastSessionid ? res.data : session
          )
        );
      }
      const response = await api.post("/sessions", newSession);
      const allSessions = [...sessions, response.data];
      setSessions(allSessions);
      navigator(`/sessions/${id}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
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
      {loading ? (
        <CircularProgress
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : sessions.length == 0 ? (
        <Grid item {...AllStyles.homeBody}>
          <Grid {...AllStyles.homeRex}>
            <img src={Images.HomRex} alt="homeRex" />
          </Grid>
          <Grid className="greetings">
            <Typography {...AllStyles.greetings}>
              Welcome, Andrew!
              <motion.span
                animate={{ rotate: [0, 30, 30, 0] }}
                transition={{
                  repeat: 5,
                  type: "tween",
                  repeatType: "mirror",
                  ease: "linear",
                }}
              >
                👋
              </motion.span>
            </Typography>
          </Grid>
          <Grid>
            <Typography {...AllStyles.message}>
              Receive Career Help From ReX!
            </Typography>
          </Grid>
          <Grid>
            <Typography {...AllStyles.message2}>
              Start a conversation with ReX right now!
            </Typography>
          </Grid>
          <Grid style={{ textAlign: "center" }}>
            <Button {...AllStyles.startChatButton} onClick={handleSubmit}>
              <Typography {...AllStyles.startChatButtonText}>
                Start Chat With ReX
              </Typography>
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid item style={{ paddingTop: "50px" }}>
          <Grid {...AllStyles.endedChatsTitle}>
            <Grid {...AllStyles.endedChats}>Active Chats</Grid>
          </Grid>
          <Grid>
            {sessions?.length
              ? sessions?.map((session) =>
                  !session.isSessionEnded ? (
                    <ChatHistory
                      key={session.id}
                      id={session.id}
                      date={session.date}
                      lasttext={
                        session?.chats?.length > 0
                          ? session.chats[session.chats.length - 1].ReX.slice(
                              0,
                              100
                            )
                          : ""
                      }
                      sessionEnded={session?.isSessionEnded}
                      handleDelete={null}
                      isActivity={false}
                      chatsLength={session?.chats?.length}
                    />
                  ) : null
                )
              : null}
          </Grid>
          <Grid {...AllStyles.endedChatsTitle}>
            <Grid {...AllStyles.endedChats}>Ended Chats </Grid>
            <Grid>
              <Link {...AllStyles.seeAllLink} href="/endedChats">
                See All
              </Link>
            </Grid>
          </Grid>
          <Grid>
            {sessions.map((session, i) =>
              session.isSessionEnded && i < 4 ? (
                <ChatHistory
                  key={session.id}
                  id={session.id}
                  date={session.date}
                  session
                  lasttext={
                    session?.chats?.length
                      ? session.chats[session.chats.length - 1].ReX.slice(
                          0,
                          100
                        )
                      : ""
                  }
                  sessionEnded={session.isSessionEnded}
                  handleDelete={() => handleDelete(session.id)}
                  isActivity={false}
                  chatsLength={session?.chats?.length}
                />
              ) : null
            )}
          </Grid>
          <Grid {...AllStyles.startAnotherChatButtonGrid}>
            <Button {...AllStyles.startChatButton} onClick={handleSubmit}>
              <Typography {...AllStyles.startChatButtonText}>
                Start Another Chat With ReX
              </Typography>
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Home;