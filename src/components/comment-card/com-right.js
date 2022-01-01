import { Avatar, Button } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React from "react";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";


const useStyles = makeStyles((theme) => ({
  reply_btn: {
    fontSize: '2rem',
    color:'blue',
    "&:hover": {
      color: 'rgb(150, 150, 255)',
      background:'none'
    }
  },
  icon: {
    color:'red'
  }
}))

const RightSide = ({ item, did_reply, id, user }) => {

  const classes = useStyles()
  return (
    <>
      <div className="card-container__right-box">
        <div className="card-container__right-box--content">
          <div className="card-container__right-box--content__img-and-name-box">
            <div  className="card-container__right-box--content__img-and-name-box--avatar-name">
              <Avatar src={item.user.image.png} />
              <h3 className="card-container__right-box--content__img-and-name-box--avatar-name__name">
                @{item.user.username}
              </h3>
            </div>

            <p className="card-container__right-box--content__img-and-name-box--date">{item.createdAt}</p>
          </div>

          <div className="card-container__right-box--content__btn-box">
            <Button
              onClick={() => {
                did_reply(id);
              }}
              className={classes.reply_btn}
            >
              <div className="card-container__right-box--content__btn-box--btn__icon">
                <TurnLeftIcon  />
              </div>{" "}
              <p className="card-container__right-box--content__btn-box--btn__text">
                Reply
              </p>
            </Button>
          </div>
        </div>

        <div  className="card-container__right-box--content-box">
          <p  className="card-container__right-box--content-box__text">{item.content}</p>
        </div>
      </div>
    </>
  );
};

export default RightSide;
