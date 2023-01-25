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
          unread: true,
          when: "1m ago",
        image:false,},
        {
          id: "2",
          firstName: "angela",
          lastName: "gray",
          activity: "followed you",
          unread: true,
          when: "5m ago",
        image:false,},
        {
          id: "3",
          firstName: "jacob",
          lastName: "thompson",
          activity: "has joined your group",
          post: "Chess Club",
          unread: true,
          when: "1days ago",
        image:false,},
        {
          id: "4",
          firstName: "rizky",
          lastName: "hasanuddin",
          activity: "sent you a private message",
          unread: false,
          when: "1 week ago",
          image:false,comment: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I`m already having lots of fun and improving my game."
        },
        {
          id: "5",
          firstName: "kimberly",
          lastName: "smith",
          activity: "commented on your picture",
       
          unread: false,
          when: "1 week ago",
        image:true,},
        {
          id: "6",
          firstName: "nathan",
          lastName: "peterson",
          activity: "reacted to your recent post",
          post: "5 end game strategies to increase your win rate",
          unread: false,
          when: "2 weeks ago",
        image:false,},
        {
          id: "7",
          firstName: "anna",
          lastName: "kim",
          activity: "left group",
          post: "Chess Club",
          unread: false,
          when: "2 weeks ago",
        image:false,},
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
    
    return (
      <div className="container">
        <Head 
        users={this.state.users} 
        markAllRead={this.markAllRead}/> 

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
            comment={user.comment}
            image={user.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
