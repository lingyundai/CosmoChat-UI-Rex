import { Grid, Button, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllStyles from "../../styles/home";
import Images from "../../constants/images";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import api from "../../api/sessions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import chatHistoryStyles from "../../styles/chatHistory";

const Navigation = ({ isChat, isEndedChats, isActvity }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [sessions, setSessions] = useState([]);
  const [thisSession, setThisSession] = useState({});  
  const id = useParams();
  const ID = id.id;
  const [opn, setOpn] = React.useState(false);
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

  const handlClose = () => {
    setOpn((prev) => !prev);
  };

  const modifySession = async (key) => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = months[month] + " " + day + ", " + year;
    let updatedSession = {};   
    const response = await api.get("/sessions");
    setSessions(response.data)
    let currentSession = {}
    id ? currentSession = response.data.filter((session)=>session.id == ID) : currentSession={};
    id ? updatedSession = {
      id: ID,
      date: formattedDate,
      chats: key == "Clear" ? [] : (response.data.filter((session)=>session.id == ID)[0].chats),
      isSessionEnded: key=="End" ? true : false
    } : updatedSession = {};
    console.log(updatedSession)
    const res = await api.put(`/sessions/${ID}`, updatedSession);
    setSessions(sessions.map(session => session.id == ID ? updatedSession : session))
    window.location.reload();
    console.log(res.data);    
    setSessions(response.data.map(session => session.id == ID ? res.data : session));
    setThisSession(res.data);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async (element) => {
    setAnchorEl(null);
    if (element == "Clear") {
      modifySession("Clear");
    } else if (element == "End") {
      setOpn(true);
    }
  };

  return (
    <Grid {...AllStyles.navigationBar}>
      {isEndedChats || isActvity ? (
        <Grid {...AllStyles.navigationLeft}>
          <Grid style={{ margin: "5px" }}>
            <Link href="/">
              <img src={Images.BackArrow} alt="NavRex" />
            </Link>
          </Grid>
          {isActvity ? (
            <Grid {...AllStyles.navigationName}>Activity</Grid>
          ) : (
            <Grid {...AllStyles.navigationName}>Ended Chats</Grid>
          )}
        </Grid>
      ) : isChat ? (
        <Grid {...AllStyles.navigationLeft}>
          <Grid style={{ margin: "5px" }}>
            <Link href="/">
              <img src={Images.BackArrow} alt="NavRex" />
            </Link>
          </Grid>
          <Grid {...AllStyles.navigationName}>ReX</Grid>
        </Grid>
      ) : (
        <Grid {...AllStyles.navigationLeft}>
          <Grid>
            <Link href="/">
              <img src={Images.NavRex} alt="NavRex" />
            </Link>
          </Grid>
          <Grid {...AllStyles.navigationName}>ReX</Grid>
        </Grid>
      )}
      {isChat || isEndedChats ? (
        <Grid {...AllStyles.navigationRight}>
          <Grid>
            <Link href="/search">
              <img src={Images.Search} alt="Search" />
            </Link>
          </Grid>
          <Grid>
            <Link onClick={handleClick}>
              <img src={Images.Options} alt="settings" />
            </Link>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose("close")}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              {...AllStyles.optionsMenu}
            >
              <MenuItem
                {...AllStyles.optonsMenuItem}
                onClick={() => handleClose("Clear")}
              >
                <img src={Images.Clear} alt="clear" />
                <Typography>&nbsp; Clear Chat</Typography>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem
                onClick={() => handleClose("export")}
                {...AllStyles.optonsMenuItem}
              >
                <img src={Images.Export} alt="export" />
                <Typography>&nbsp; Export Chat</Typography>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem
                onClick={() => handleClose("End")}
                variant="outlined"
                {...AllStyles.optonsMenuItem}
              >
                <img src={Images.End} alt="end" />
                <Typography>&nbsp; End Chat</Typography>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      ) : (
        <Grid {...AllStyles.navigationRight}>
          <Grid>
            <Link href="/activity">
              <img src={Images.ActivityIc} alt="Activity" />
            </Link>
          </Grid>
          <Grid>
            <Link href="/settings">
              <img src={Images.SettingIc} alt="settings" />
            </Link>
          </Grid>
        </Grid>
      )}
      <Dialog
        open={opn}
        onClose={handlClose}
        aria-labelledby="responsive-dialog-title"
        aria-describedby="responsive-dialog-description"
        {...chatHistoryStyles.popUp}
      >
        <DialogTitle id="responsive-dialog-title">
          <img src={Images.HomRex} alt="homeRex" />
        </DialogTitle>
        <DialogContent id="responsive-dialog-description">
          <DialogContentText {...chatHistoryStyles.popUpTextTitle}>
            End Chat?
          </DialogContentText>
          <DialogContentText>
            Are you sure, you want to end this chat?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container {...chatHistoryStyles.popUpButtons}>
            <Grid item>
              <Button
                onClick={() => modifySession("End")}
                {...chatHistoryStyles.buttonDelete}
              >
                Yes, End
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={handlClose} {...chatHistoryStyles.buttonCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Navigation;