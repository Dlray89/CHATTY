import React  from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {  Badge} from "@mui/material";
// import avatar from "../images/avatars/image-amyrobson.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  like_btn: {
    color: 'red',
    fontSize:'3.5rem'
  }
}))

const Like_btn = ({ id, item, count, countReplyLikes }) => {
  const classes = useStyles()

  return (
    <>
         <div  className="card-container__left-box">
            <Badge
                  color="primary"
                  badgeContent={item.score}
          onClick={() => { count(id); countReplyLikes();}}
            >
              <FavoriteIcon className={classes.like_btn} fontSize="large" />
            </Badge>
          </div>
    </>
  );
};

export default Like_btn;
