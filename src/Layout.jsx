import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [isChat, setIsChat] = useState(false);
  const [isEndedChats, setIsEndedChats] = useState(false);
  const [isActvity, setIsActivity] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      setIsChat(false);
      setIsEndedChats(false);
      setIsActivity(false);
    } else if (location.pathname == "/endedChats") {
      setIsChat(false);
      setIsEndedChats(true);
      setIsActivity(false);
    } else if (location.pathname == "/activity") {
      setIsChat(false);
      setIsEndedChats(false);
      setIsActivity(true);
    } else {
      setIsChat(true);
      setIsEndedChats(false);
      setIsActivity(false);
    }
  }, [location]);
  return (
    <>
      <Navigation
        isChat={isChat}
        isEndedChats={isEndedChats}
        isActvity={isActvity}
      />
      <Outlet />
    </>
  );
};

export default Layout;