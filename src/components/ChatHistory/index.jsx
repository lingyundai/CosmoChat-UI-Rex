import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import Images from "../../constants/images";
import chatHistoryStyles from "../../styles/chatHistory";
import { useNavigate } from "react-router";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ChatHistory = ({
  id,
  date,
  lasttext,
  sessionEnded,
  handleDelete,
  isActivity,
  chatsLength,
}) => {
  const [dragged, setDragged] = useState(false);
  const navigator = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const idName = open ? "simple-popover" : undefined;

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrag = () => {
    setDragged((prev) => !prev);
  };
  const handleLink = () => {
    navigator(`/sessions/${id}`);
  };

  return (
    <>
      {!isActivity ? (
        <Grid
          container
          flexDirection="row-reverse"
          justifyContent="flex-end"
          alignItems="start"
        >
          <Grid
            item
            xs={sessionEnded ? 4 : 0}
            sx={{ display: !dragged && "none" }}
          >
            <Button
              aria-describedby={idName}
              variant="contained"
              {...chatHistoryStyles.deleteButton}
              onClick={handleOpen}
            >
              <img src={Images.Trash} alt="Delete" />
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              {...chatHistoryStyles.popUp}
              id="textClose"
            >
              <DialogTitle id="responsive-dialog-title">
                <img src={Images.HomRex} alt="homeRex" />
              </DialogTitle>
              <DialogContent>
                <DialogContentText {...chatHistoryStyles.popUpTextTitle}>
                  Delete Chat?
                </DialogContentText>
                <DialogContentText>
                  Are you sure, you want to delete this ended chat?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Grid container {...chatHistoryStyles.popUpButtons}>
                  <Grid item>
                    <Button
                      onClick={handleDelete}
                      {...chatHistoryStyles.buttonDelete}
                    >
                      Yes, Delete
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={handleClose}
                      {...chatHistoryStyles.buttonCancel}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid
            item
            {...chatHistoryStyles.outLine}
            xs={dragged ? 10 : 12}
            onDoubleClick={handleLink}
            onClick={sessionEnded ? handleDrag : handleLink}
          >
            <Grid>
              <img src={Images.HomRex} alt="ReX" style={{ width: "80px" }} />
            </Grid>
            <Grid {...chatHistoryStyles.text}>
              {sessionEnded == true ? (
                <Grid {...chatHistoryStyles.title}>ReX - {date}</Grid>
              ) : (
                <Grid {...chatHistoryStyles.title}>ReX</Grid>
              )}
              <Grid {...chatHistoryStyles.body}>{lasttext}</Grid>
            </Grid>
            {sessionEnded == false ? (
              <Grid paddingTop="25px">
                <img src={Images.Typing} alt="typing" />
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      ) : (
        <Grid item {...chatHistoryStyles.outLine} width="500px">
          <Grid>
            <img src={Images.Clock} alt="Clock" style={{ width: "48px" }} />
          </Grid>
          <Grid {...chatHistoryStyles.text}>
            <Grid {...chatHistoryStyles.title}>ReX - {date}</Grid>
            <Grid {...chatHistoryStyles.body}>
              {chatsLength > 1
                ? `${chatsLength} Messages`
                : `${chatsLength} Message`}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ChatHistory;