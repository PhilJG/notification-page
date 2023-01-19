import { useState } from "react";
import { Component } from "react";
import "./App.css";
import Head from "./components/Head";
import User from "./components/User";


class App extends Component {
  constructor() {
    super();
  
    console.log("1");
  }

  render() {
    
  return (
    <div className='container'>
      <Head />

      <User />
    </div>
  );
}}

export default App;
