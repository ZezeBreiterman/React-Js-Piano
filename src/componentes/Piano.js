import Key from "./Key";
import { useState, useEffect } from "react";
import "./Piano.css";
import indexMp3Notes from "./notes/indexMp3Notes"


function Piano() {

  //Estados Tecla
  const [pressedKeys, setPressedKeys] = useState([
    { tecla: "Q", isPressed: false, keyNote: "C3" , isSharp : false},
    { tecla: "2", isPressed: false, keyNote: "CS3" , isSharp : true},
    { tecla: "W", isPressed: false, keyNote: "D3" , isSharp : false},
    { tecla: "3", isPressed: false, keyNote: "DS3" , isSharp : true},
    { tecla: "E", isPressed: false, keyNote: "E3" , isSharp : false},
    { tecla: "R", isPressed: false, keyNote: "F3" , isSharp : false},
    { tecla: "5", isPressed: false, keyNote: "FS3" , isSharp : true},
    { tecla: "T", isPressed: false, keyNote: "G3" , isSharp : false},
    { tecla: "6", isPressed: false, keyNote: "GS3" , isSharp : true},
    { tecla: "Y", isPressed: false, keyNote: "A4" , isSharp : false},
    { tecla: "7", isPressed: false, keyNote: "AS4" , isSharp : true},
    { tecla: "U", isPressed: false, keyNote: "B3" , isSharp : false},
    { tecla: "I", isPressed: false, keyNote: "C4" , isSharp : false},
    { tecla: "9", isPressed: false, keyNote: "CS4" , isSharp : true},
    { tecla: "O", isPressed: false, keyNote: "D4" , isSharp : false},
    { tecla: "0", isPressed: false, keyNote: "DS4" , isSharp : true},
    { tecla: "P", isPressed: false, keyNote: "E4" , isSharp : false},
    { tecla: "Z", isPressed: false, keyNote: "F4" , isSharp : false},
    { tecla: "S", isPressed: false, keyNote: "FS4" , isSharp : true},
    { tecla: "X", isPressed: false, keyNote: "G4" , isSharp : false},
    { tecla: "D", isPressed: false, keyNote: "GS4" , isSharp : true},
    { tecla: "C", isPressed: false, keyNote: "A5" , isSharp : false},
    { tecla: "F", isPressed: false, keyNote: "AS5" , isSharp : true},
    { tecla: "V", isPressed: false, keyNote: "B5" , isSharp : false},
    { tecla: "B", isPressed: false, keyNote: "C5" , isSharp : false},
    { tecla: "H", isPressed: false, keyNote: "CS5" , isSharp : true},
    { tecla: "N", isPressed: false, keyNote: "D5" , isSharp : false},
    { tecla: "J", isPressed: false, keyNote: "DS5" , isSharp : true},
    { tecla: "M", isPressed: false, keyNote: "E5" , isSharp : false},
    { tecla: ",", isPressed: false, keyNote: "F5" , isSharp : false},
    { tecla: "L", isPressed: false, keyNote: "FS5" , isSharp : true},
    { tecla: ".", isPressed: false, keyNote: "G5" , isSharp : false},
    { tecla: "ñ", isPressed: false, keyNote: "GS5" , isSharp : true},
    { tecla: "-", isPressed: false, keyNote: "A5" , isSharp : false},
    { tecla: "{", isPressed: false, keyNote: "AS5" , isSharp : true},
    { tecla: "a", isPressed: false, keyNote: "B5" , isSharp : false}
  ]);

  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }, []);

  const handleKeyUp = (event) => {
    const indexTecla = pressedKeys.findIndex(
      pressedKey => pressedKey.tecla.toLowerCase() === event.key
    )
    if (indexTecla >= 0) {
      var copiaPressedKeys = [...pressedKeys]
      copiaPressedKeys[indexTecla].isPressed = false
      setPressedKeys(copiaPressedKeys)
    }
  };

  const handleKeyDown = (event) => {
    const indexTecla = pressedKeys.findIndex(
      pressedKey => pressedKey.tecla.toLowerCase() === event.key
    )
//    console.log(pressedKeys.keyNote);
    
    if (indexTecla >= 0) {
      var copiaPressedKeys = [...pressedKeys]
      copiaPressedKeys[indexTecla].isPressed = true

      let teclaApretada = copiaPressedKeys[indexTecla].keyNote.toLowerCase()
      console.log(teclaApretada)
      // console.log(indexMp3Notes.teclaApretada)
      //console.log(indexMp3Notes[teclaApretada])
      let audio = new Audio(indexMp3Notes[teclaApretada])

      const start = () => {
      audio.play()}
      start()

      setPressedKeys(copiaPressedKeys)

    //   if (!pressedKeys[indexTecla].isPressed) {
    //     start()
    // }
      
      
    }
  };
  // const playNote = () => {
  //   const noteAudio = new Audio(document.getElementById(keyNote).src)
  //   noteAudio.play()
  // }
  const keys = pressedKeys.map(({index, tecla, isPressed, isSharp }) => {
    return(
      <Key
        key={index}
        note={tecla}
        isSharp = {isSharp}
        isPressed = {isPressed}     
      />
    )
  })

  return (
  <div>
    <div className="piano">
      {keys}
    </div>


  </div>

)}


export default Piano;
