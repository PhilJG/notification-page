import { Component } from "react";

import "./appStyle.css";

class User extends Component {
  render() {
    //initialize the state with users array. That is all constructor is being used for in this project
    this.state = {
      users: [
        {
          id: "1",
          firstName: "mark",
          lastName: "webber",
          activity: "reacted to your recent post",
          post: "My first tournament today!",
          read: "false",
          when: "1m ago",
        },
        {
          id: "2",
          firstName: "angela",
          lastName: "gray",
          activity: "followed you",
          read: "false",
          when: "5m ago",
        },
        {
          id: "3",
          firstName: "jacob",
          lastName: "thompson",
          activity: "has joined your group",
          post: "Chess Club",
          read: "false",
          when: "1days ago",
        },
        {
          id: "4",
          firstName: "rizky",
          lastName: "hasanuddin",
          activity: "commented on your picture",
          read: "true",
          when: "1 week ago",
        },
        {
          id: "5",
          firstName: "kimberly",
          lastName: "smith",
          activity: "commented on your picture",
          read: "true",
          when: "1 week ago",
        },
        {
          id: "6",
          firstName: "nathan",
          lastName: "peterson",
          activity: "reacted to your recent post",
          post: "5 end game strategies to increase your win rate",
          read: "true",
          when: "2 weeks ago",
        },
        {
          id: "7",
          firstName: "anna",
          lastName: "kim",
          activity: "left group",
          post: "Chess Club",
          read: "true",
          when: "2 weeks ago",
        },
      ],
    };
    return (
      <div >
        {this.state.users.map((user) => {
          return (
            <div className="notification flex" key={user.id}>
              <img
                className="avatar"
                src={`./assets/images/avatar-${user.firstName}-${user.lastName}.webp`}
              ></img>
              <div className="notification__box">
                <span className="notification__prop notification__prop--name">
                  {user.firstName} {user.lastName}
                </span>
                {"  "}
                <span className="notification__prop notification__prop--activity">
                  {user.activity}
                </span>
                {"  "}
                <span className="notification__prop notification__prop--post">
                  {user.post}{" "}
                </span>
                <div>
                  {user.circle}
                  <span className="notification__prop notification__prop--when">
                    {user.when}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
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
