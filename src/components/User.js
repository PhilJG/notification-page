import { Component } from "react";
// import Head from "./Head";

import "./appStyle.css";

class User extends Component {

  render() {
    const  { id, className, firstName, lastName, activity, post, when, dot} = this.props   
    
    const whiteSpace = "    "
  return (
    <div>
            <div className={`user notification flex ${className}`} key={id}>
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
                <span className="notification__prop notification__prop--post">
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
            </div>
      </div>
    );
  }
} 


// return (
//   <div className='notification flex'>
//     <img
//       className='avatar'
//       src={`./assets/images/avatar-${props.firstName}-${props.lastName}.webp`}></img>
//     <div className='notification__box'>
//       <span className='notification__prop notification__prop--name'>
//         {props.firstName} {props.lastName}
//       </span>
//       {"  "}
//       <span className='notification__prop notification__prop--activity'>
//         {props.activity}
//       </span>
//       {"  "}
//       <span className='notification__prop notification__prop--post'>
//         {props.post}{" "}
//       </span>
//       <div>
//         {props.circle}
//         <span className='notification__prop notification__prop--when'>
//           {props.when}
//         </span>
//       </div>
//     </div>
//   </div>
// );
// };
export default User;
