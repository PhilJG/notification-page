import { Component } from "react";

class Head extends Component {
  
  render(){
    const unreadCount = this.props.users.filter(user => user.unread).length;
  return (
   <div className="flex head">
          <div className="head__left flex">
            <h1>Notifications</h1>
            <div 
            className="head__count">
              {unreadCount > 0 ? unreadCount : ""}
            </div>
          </div>
          <button 
          onClick={this.props.markAllRead} 
          className="head__button">
            Mark all as read
          </button>
        </div>
    );
  }
  }

export default Head;
