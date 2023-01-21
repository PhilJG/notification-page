import { useState } from "react";
import { Component } from "react";
import "./App.css";
// import Head from "./components/Head";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: "1",
          firstName: "mark",
          lastName: "webber",
          activity: "reacted to your recent post",
          post: "My first tournament today!",
          read: false,
          when: "1m ago",
        },
        {
          id: "2",
          firstName: "angela",
          lastName: "gray",
          activity: "followed you",
          read: false,
          when: "5m ago",
        },
        {
          id: "3",
          firstName: "jacob",
          lastName: "thompson",
          activity: "has joined your group",
          post: "Chess Club",
          read: false,
          when: "1days ago",
        },
        {
          id: "4",
          firstName: "rizky",
          lastName: "hasanuddin",
          activity: "commented on your picture",
          read: true,
          when: "1 week ago",
        },
        {
          id: "5",
          firstName: "kimberly",
          lastName: "smith",
          activity: "commented on your picture",
          read: true,
          when: "1 week ago",
        },
        {
          id: "6",
          firstName: "nathan",
          lastName: "peterson",
          activity: "reacted to your recent post",
          post: "5 end game strategies to increase your win rate",
          read: true,
          when: "2 weeks ago",
        },
        {
          id: "7",
          firstName: "anna",
          lastName: "kim",
          activity: "left group",
          post: "Chess Club",
          read: true,
          when: "2 weeks ago",
        },
      ],
    };
  }
   markRead = () => {
  
     // loop through users array
     // produce new user object that is set to false with map
     let readUsers = this.state.users.map((u) => {
       //if user has not been read(false)
       if (u.read === false) {
         //change to read(true)
         u.read = true;
         console.log(u);
         
       }
       return u;
     });
     // setState changed to new readUsers array
     this.setState({ users: readUsers });
     console.log('read');
     
   };


  render() {
    return (
      <div className="container">
        <div className="flex head">
          <div className="head__left flex">
            <h1>Notifications</h1>
            <div 
            // className={state ? "head__count" : " "}
            >
              {/* {state ? "3" : " "} */}
            </div>
          </div>
          <button 
          onClick={this.state.markRead} 
          className="head__read">
            Mark all as read
          </button>
        </div>
        {/* <Head /> */}

        {this.state.users.map((user) => (
          <User
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            activity={user.activity}
            post={user.post}
            when={user.when}
            read={user.read}
            //passing markRead function into component
            markRead={this.markRead}
          />
        ))}
      </div>
    );
  }
}

export default App;
