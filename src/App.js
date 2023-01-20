import { useState } from "react";
import { Component } from "react";
import "./App.css";
import Head from "./components/Head";
import User from "./components/User";

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="container">
        <Head />

        {this.state.users.map((user) => (
          <User
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            activity={user.activity}
            post={user.post}
            read={user.read}
            when={user.when}
          />
        ))}
      </div>
    );
  }
}

export default App;
