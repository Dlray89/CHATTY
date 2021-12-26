import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {  Badge} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  like_btn: {
    color: "red",
    fontSize: "3rem",
  },
 
}));

const ReplyLikes = ({ id, item, countReplyLikes }) => {
  const classes = useStyles();

  return (
    <>
      <div className="card-container__left-box">
        <Badge
        className={classes.badge}
          color="primary"
          badgeContent={item.score}
          onClick={() => {
            countReplyLikes(id);
          }}
        >
          <FavoriteIcon className={classes.like_btn} fontSize="large" />
        </Badge>
      </div>
    </>
  );
};

export default ReplyLikes;
