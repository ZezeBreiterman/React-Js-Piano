import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Piano from "./componentes/Piano";



function App() {
  // //import audioFile from './componentes/notes/b5.mp3'
  // let audio = new Audio(audioFile)
  // const start = () => {
  //   audio.play()
  //   //<button onClick={start}>play</button>
  // }
  return (
    <div className="App">
      <Piano />
    </div>
  );
}

export default App;
