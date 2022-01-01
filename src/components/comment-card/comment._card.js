import React from "react";
import { Avatar, Button, TextField } from "@mui/material";
// import avatar from "../images/avatars/image-amyrobson.png";
import Likebtn from "../btns/like-btn";
import RightSide from "./com-right";
import AllReplies from "../response-box";


const CommentCard = ({
  comments,
  userdata,
  count,
  did_reply,
  replayToMessage,
  replymessage,
  setReplyMessage,
  close_reply,
  countReplyLikes,
  user
}) => {
  //   const [count, setCount] = useState(0);
  //  const [data, setData] = useState(userdata);
  // const [replies, setReplies] = useState([]);
  const token = localStorage.getItem('token')

 

  return (
    <div style={{padding:'10rem 0'}}>
   
      {comments.map((item, id) => (
        <>
          {item.didreply ? (
            <>
              <>
                {" "}
                <div className="card-container" key={id}>
                {console.log(token, 'token')}
                  <Likebtn id={id} item={item} count={count} />
                  <div className="card-container__right-box">
                    <RightSide id={id} item={item} did_reply={did_reply} user={user} />
                  </div>
                </div>
              </>
              <>
                {item.replies.map((reply, id) => (
                  <>
                    <AllReplies
                      item={reply}
                      id={id}
                      countReplyLikes={countReplyLikes}
                      did_reply={did_reply}
                      user={user}
                    />
                  </>
                ))}
              </>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  replayToMessage(id);
                }}
                className="reply-container"
              >
                <div className="reply-container__left">
                  <Avatar src={user.picture} style={{ margin: "0 auto" }} />
                </div>

                <div className="reply-container__middle">
                  <TextField
                    multiline
                    rows={4}
                    style={{ width: "100%" }}
                    variant="outlined"
                    size="small"
                    value={replymessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                </div>

                <div className="reply-container__right">
                  <Button
                    disabled={replymessage.length === 0}
                    variant="contained"
                    type="submit"
                  >
                    Reply
                  </Button>
                  <Button
                    style={{ background: "red", marginTop: "0.5em" }}
                    onClick={() => close_reply(id)}
                    variant="contained"
                  >
                    Close
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <>
              {" "}
              <div className="card-container" key={id}>
                {console.log(
                  item.user.image.png,
                  "item",
                  `'${item.user.image.png}'`
                )}
                <Likebtn id={id} item={item} count={count} />
                <RightSide id={id} item={item} did_reply={did_reply} user={user} />
              </div>
              {console.log(comments)}
              {item.replies.map((item, id) => (
                <>
                  <AllReplies
                    item={item}
                    id={id}
                    countReplyLikes={countReplyLikes}
                    did_reply={did_reply}
                  />
                </>
              ))}
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default CommentCard;
