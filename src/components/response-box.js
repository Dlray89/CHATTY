import { Avatar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ReplyLikes from "./btns/reply-like";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";

const useStyles = makeStyles((theme) => ({
  reply_btn: {
    color: "blue",
    display: "flex",
    width: "100%",
    background: "none",
    "&:hover": {
      color: "rgb(150, 150, 255)",
      background: "none",
    },
  },
}));

const AllReplies = ({ id, item, countReplyLikes, did_reply }) => {
  const classes = useStyles();
  return (
    <>
      <div className="response-box">
        <div className="response-box__left">
          <ReplyLikes id={id} item={item} countReplyLikes={countReplyLikes} />
        </div>

        <div className="response-box__right">
          <div className="response-box__right--content">
            <div className="response-box__right--content__profile-info-box">
              <div className="response-box__right--content__profile-info-box--left">
                {" "}
                <div className="response-box__right--content__profile-info-box--left__pic">
                  <Avatar />
                </div>
                <div className="response-box__right--content__profile-info-box--left__name">
                  @{item.user.username}{" "}
                  {console.log(item.user.username, "username")}
                </div>
              </div>{" "}
              <div className="response-box__right--content__profile-info-box--right">
                <p className="response-box__right--content__profile-info-box--right__date">
                  {item.createdAt}
                </p>
              </div>
            </div>

            <div className="response-box__right--content__btn-box">
              <Button
                className={classes.reply_btn}
                onClick={() => {
                  did_reply(id);
                }}
                style={{ fontSize: "1.2rem" }}
              >
                <div className="response-box__right--content__btn-box--icon">
                  <TurnLeftIcon />
                </div>
                <p className="response-box__right--content__btn-box--text">
                  Reply
                </p>
              </Button>
            </div>
          </div>

          <div className="response-box__right--replyingcontent">
            {" "}
            <p className="response-box__right--replyingcontent__box">
              {" "}
              <span className="response-box__right--replyingcontent__box--specText">
                @{item.replyingTo}: {item.content}
              </span>{" "}
             
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReplies;
