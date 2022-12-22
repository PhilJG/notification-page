import "./appStyle.css";
import React, { useState } from "react";

export const UserNotification = (props) => {
  return (
    <div className='notification  flex'>
      <img
        className='avatar'
        src={`./assets/images/avatar-${props.firstName}-${props.lastName}.webp`}></img>
      <div className='notification__box'>
        <span className='notification__prop notification__prop--name'>
          {props.firstName} {props.lastName}
        </span>
        {"  "}
        <span className='notification__prop notification__prop--activity'>
          {props.activity}
        </span>
        {"  "}
        <span className='notification__prop notification__prop--post'>
          {props.post}{" "}
        </span>
        <div>
          {props.circle}
          <span className='notification__prop notification__prop--when'>
            {props.when}
          </span>
        </div>
      </div>
    </div>
  );
};
export default UserNotification;
