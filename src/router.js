import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import CommentCard from "./components/comment-card/comment._card";
import Home from "./home";
import data from "./data.json";
import Register from "./auth/register";
import PrivateRoute from "./utils/ProtectedRoute";
import NavBar from "./components/navbar";
import Dashboard from "./auth/dashboard";
import { useAuth0 } from "@auth0/auth0-react";

const RouterNav = () => {
  const [userData, setUserData] = useState(data);
  const [comments, setCOmments] = useState(data.comments);
  const currentUser = userData.currentUser;
  const [openReply, setOpenReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const { user, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const [userMetaData, setUserMetadata] = useState(null);

  const countLikes = (id) => {
    const newLikes = [...comments];
    newLikes[id].score = newLikes[id].score + 1;
    setCOmments(newLikes);
    window.localStorage.setItem("likes", newLikes[id].score);
  };

  const countReplyLikes = (id) => {
    const newLikes = [...comments];

    const reply = newLikes[id].replies;
    reply[id].score = reply[id].score + 1;
    setCOmments(newLikes);
    console.log(newLikes);
  };

  const did_reply = (id) => {
    const newData = [...comments];
    newData[id].didreply = true;
    setCOmments(newData);
  };

  const close_reply = (id) => {
    const newData = [...comments];
    newData[id].didreply = false;
    setCOmments(newData);
  };

  const ReplyToMessage = (id, e) => {
    const newComments = [...comments];
    // const amy = window.localStorage.setItem(
    //   "amy",
    //   newComments[id].user.username
    // );

    const newReply = {
      createdAt: "1 week ago",
      content: replyMessage,
      id: newComments[id].id,
      score: 0,
      replyingTo: newComments[id].user.username,
      user: {
        image: user.picture,
        username: user.name
      },
      replies: [],
    };
    newComments[id].replies = newComments[id].replies.concat(newReply);
    newComments[id].didreply = false;
    setCOmments(newComments);
    setReplyMessage("");
  };

  return (
    <>
      <div>
        <NavBar
          user={user}
          isAuthenticated={isAuthenticated}
          logout={logout}
          getAccessTokenSilently={getAccessTokenSilently}
          userMetaData={userMetaData}
          setUserMetadata={setUserMetadata}
        />
      </div>
      <Routes>
        {console.log(setUserData, currentUser, setOpenReply)}
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/comments"
          element={
            <PrivateRoute>
              <CommentCard
                countReplyLikes={countReplyLikes}
                replayToMessage={ReplyToMessage}
                replymessage={replyMessage}
                setReplyMessage={setReplyMessage}
                openReply={openReply}
                did_reply={did_reply}
                userdata={userData}
                comments={comments}
                setCOmments={setCOmments}
                count={countLikes}
                close_reply={close_reply}
                user={user}
              />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default RouterNav;
