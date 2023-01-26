import React from "react";

import { Component } from "react";

import "./appStyle.css";

class User extends Component {

  render() {
    const  { id, className, firstName, lastName, activity, post, when, dot, comment, image} = this.props   
    
    const displayImage = image === true ? "post-image" : "none"  
    const whiteSpace = "    "
  return (
    <div>
            <div className={`user notification  ${className}`} key={id}>
              <img
                className="avatar"
                src={`./assets/images/avatar-${firstName}-${lastName}.webp`} alt={`${firstName} ${lastName}`}
                ></img>
              <div className="notification__box">
                <span className="notification__prop notification__prop--name">
                  {firstName} {lastName}
                </span>
                {whiteSpace}
                <span className="notification__prop notification__prop--activity">
                  {activity}
                </span>
                {whiteSpace}
                <span href="#" className="notification__prop notification__prop--post">
                  {post}
                </span>
              {whiteSpace}
                <span className={dot}></span>
                <div>
                  <span className="notification__prop notification__prop--when">
                    {when}
                  </span>
                 
                </div>
              </div>
                <img className={(displayImage)} src="./assets/images/image-chess.webp" alt="chess player"></img>
              <p className="notification__box--comment">
              {comment}
              </p>
            </div>
      </div>
    );
  }
} 

export default User;
