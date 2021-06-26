import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classone from './components/Classone';
import Func from './components/Func';
import UserRegistration from './components/UserRegistration';
import NewClassone from './components/NewClassone';
import MyNewReg from './components/NewRegis';
import Addition from './components/Addition';

function App() {

  const date = new Date(1998, 7, 8);

  const instusers = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
  ];

  const whatsusers = [
    { id: 101, name: "diya" },
    { id: 201, name: "dharini" },
    { id: 301, name: "vivek" },
  ];


  const labelName = "check value";
  return (
    <div>
      <h1 className='header'> Date :{date.toString()} </h1>

      <hr />
      <Classone />

      <hr />
      <Func userdata={instusers} ts={date} ln={labelName} />

      <Func userdata={whatsusers} ts={date} ln={labelName} />

      <UserRegistration />

      <NewClassone />

      <MyNewReg />

      <Addition />
    </div>
    // React.createElement("div",{},React.createElement("h1",{className:'header'},"Compiled ".concat(date.toString())))
  );
}

export default App;
