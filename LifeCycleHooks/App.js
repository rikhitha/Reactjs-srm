import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

import FirstClass from './components/FirstClass';

import FirstFunction from './components/FirstFunction';

function App() {

  const [color,setColor]=useState("pink");

  const changecolor=(e) =>
  {
    setColor(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" value={color} onChange={changecolor} />
      <FirstClass color={color} />

      {/* <FirstFunction /> */}
    </div>
  );
}

export default App;
