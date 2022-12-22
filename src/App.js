import { useState } from "react";
import "./App.css";
import Head from "./components/Head";
import { UserNotification } from "./components/UserNotifiactions";

function App() {
  useState();
  return (
    <div className='container'>
      <Head />

      <UserNotification
        firstName='mark'
        lastName='webber'
        activity='reacted to your recent post'
        post='My first tournament today!'
        read='false'
        when='1m ago'
      />

      <UserNotification
        firstName='angela'
        lastName='gray'
        activity='followed you'
        read='false'
        when='5m ago'
      />

      <UserNotification
        firstName='jacob'
        lastName='thompson'
        activity='has joined your group'
        post='Chess Club'
        read='false'
        when='1days ago'
      />

      <UserNotification
        firstName='rizky'
        lastName='hasanuddin'
        activity='sent you a private message'
        post=''
        read='true'
        when='5 days ago'
      />

      <UserNotification
        firstName='kimberly'
        lastName='smith'
        activity='commented on your picture'
        read='true'
        when='1 week ago'
      />

      <UserNotification
        firstName='nathan'
        lastName='peterson'
        activity='reacted to your recent post'
        post='5 end game strategies to increase your win rate'
        read='true'
        when='2 weeks ago'
      />

      <UserNotification
        firstName='anna'
        lastName='kim'
        activity='left group'
        post='Chess Club'
        read='true'
        whe='2 weeks ago'
      />
    </div>
  );
}

export default App;
