import { Typography, Grid } from "@mui/material";
import React from "react";
import ChatStyles from "../../styles/chat";

const UserMessage = ({ userMessage }) => {
  return (
    <Grid { ...ChatStyles.userMessage }>
      <Typography { ...ChatStyles.userMessageText }>
        {userMessage}
      </Typography>
    </Grid>
  );
};

export default UserMessage;