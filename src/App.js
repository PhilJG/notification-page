import "./App.css";
import Head from "./components/Head";
import { Component } from "react";
import { UserNotification } from './components/UserNotification'

class App extends Component {
  constructor() {
    super();
    //initialize the state with users. That is all constructor is being used for in this project
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
          lastName: "Thompson",
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
    console.log("1");
  }

  render() {
    console.log("2");

    return (
      <div className="container">
            <div className='flex head'>
      <div className='head__left flex'>
        <h1>Notifications</h1>
        <div className='head__count'>3</div>
      </div>
      <a className='head__right'>Mark all as read</a>
    </div>

        {this.state.users.map((user) => {
          return (
            <div className='notification flex'>
            <img
              className='avatar'
              src={`./assets/images/avatar-${this.state.user.firstName}-${this.state.user.lastName}.webp`}></img>
            <div className='notification__box'>
              <span className='notification__prop notification__prop--name'>
                {this.state.user.firstName} {this.state.user.lastName}
              </span>
              {"  "}
              <span className='notification__prop notification__prop--activity'>
                {this.state.user.activity}
              </span>
              {"  "}
              <span className='notification__prop notification__prop--post'>
                {this.state.user.post}{" "}
              </span>
              <div>
                {this.state.user.circle}
                <span className='notification__prop notification__prop--when'>
                  {this.state.user.when}
                </span>
              </div>
            </div>
          </div>
          );
        })}

        {/* <Head />

        <UserNotification /> */}

      </div>
    );
  }
}

export default App;
