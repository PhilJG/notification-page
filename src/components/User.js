import { Component } from "react";
// import Head from "./Head";

import "./appStyle.css";

class User extends Component {

  render() {
    const  { id, className, firstName, lastName, activity, post, when} = this.props   

  return (
    <div>
            <div className={`user notification ${className}`} key={id}>
              <img
                className="avatar"
                src={`./assets/images/avatar-${firstName}-${lastName}.webp`}
                ></img>
              <div className="notification__box">
                <span className="notification__prop notification__prop--name">
                  {firstName} {lastName}
                </span>
                {"  "}
                <span className="notification__prop notification__prop--activity">
                  {activity}
                </span>
                {"  "}
                <span className="notification__prop notification__prop--post">
                  {post}{" "}
                </span>
                <div>
                  {this.props.circle}
                  <span className="notification__prop notification__prop--when">
                    {when}
                  </span>
                  {/* <button onClick={this.changeState}>Mark as read</button>
                  {this.state.hasChanged && (<span>Updated</span>)} */}
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
