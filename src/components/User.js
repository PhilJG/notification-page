import { Component } from "react";
import Head from "./Head";

import "./appStyle.css";

class User extends Component {

  constructor(props){
    super(props);
    this.state={
      hasChanged: false
    }
  }
  render() {
    return (
      <div >
            <div className="notification flex" key={this.props.id}>
              <img
                className="avatar"
                src={`./assets/images/avatar-${this.props.firstName}-${this.props.lastName}.webp`}
              ></img>
              <div className="notification__box">
                <span className="notification__prop notification__prop--name">
                  {this.props.firstName} {this.props.lastName}
                </span>
                {"  "}
                <span className="notification__prop notification__prop--activity">
                  {this.props.activity}
                </span>
                {"  "}
                <span className="notification__prop notification__prop--post">
                  {this.props.post}{" "}
                </span>
                <div>
                  {this.props.circle}
                  <span className="notification__prop notification__prop--when">
                    {this.props.when}
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
