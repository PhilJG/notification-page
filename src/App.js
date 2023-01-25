import { Component } from "react";
import "./App.css";
// import Head from "./components/Head";
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
          unread: true,
          when: "1m ago",
        },
        {
          id: "2",
          firstName: "angela",
          lastName: "gray",
          activity: "followed you",
          unread: true,
          when: "5m ago",
        },
        {
          id: "3",
          firstName: "jacob",
          lastName: "thompson",
          activity: "has joined your group",
          post: "Chess Club",
          unread: true,
          when: "1days ago",
        },
        {
          id: "4",
          firstName: "rizky",
          lastName: "hasanuddin",
          activity: "commented on your picture",
          unread: false,
          when: "1 week ago",
        },
        {
          id: "5",
          firstName: "kimberly",
          lastName: "smith",
          activity: "commented on your picture",
          unread: false,
          when: "1 week ago",
        },
        {
          id: "6",
          firstName: "nathan",
          lastName: "peterson",
          activity: "reacted to your recent post",
          post: "5 end game strategies to increase your win rate",
          unread: false,
          when: "2 weeks ago",
        },
        {
          id: "7",
          firstName: "anna",
          lastName: "kim",
          activity: "left group",
          post: "Chess Club",
          unread: false,
          when: "2 weeks ago",
        },
      ],
    };
  }

   markAllRead = () => {
  
     // loop through users array
     // produce new user object that is set to false with map
     const updatedUsers = this.state.users.map(user => {       
      return { ...user, unread: false };
     });
     
     this.setState({users: updatedUsers});
     
   };


  render() {
    const unreadCount = this.state.users.filter(user => user.unread).length;
    
    return (
      <div className="container">
        <div className="flex head">
          <div className="head__left flex">
            <h1>Notifications</h1>
            <div 
            className="head__count">
              {unreadCount > 0 ? unreadCount : ""}
            </div>
          </div>
          <button 
          onClick={this.markAllRead} 
          className="head__button">
            Mark all as read
          </button>
        </div>
        {/* <Head /> */}

        {this.state.users.map((user) => (
          <User
            key={user.id}
            className={user.unread ? "unread" : "read"}
            firstName={user.firstName}
            lastName={user.lastName}
            activity={user.activity}
            post={user.post}
            when={user.when}
            dot={user.unread ? "dot__unread" : "dot__read"}
            
            // read={user.read && <span>(read)</span>}
            //passing markRead function into component
            // markRead={(this.markRead)}
          />
        ))}
      </div>
    );
  }
}

export default App;
