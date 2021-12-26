import React from "react";
import { Avatar, Button, TextField } from "@mui/material";

const replybox = ({ addReplies, item }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <div className="reply-container">
        <div className="reply-container__left">
          <Avatar style={{ margin: "0 auto" }} />
        </div>

        <div className="reply-container__middle">
          <TextField
            multiline
            rows={4}
            style={{ width: "100%" }}
            variant="outlined"
            size="small"
          />
        </div>

        <div className="reply-container__right">
          <Button
            onClick={() => {
              addReplies(item);
            }}
            variant="contained"
          >
            Reply
                  </Button>
                  <Button
            onClick={() => {
              addReplies(item);
            }}
            variant="contained"
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
}

export default replybox;
