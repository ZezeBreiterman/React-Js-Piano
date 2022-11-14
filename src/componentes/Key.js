import "./Key.css";

function Key({ note , isSharp, isPressed }) {
  let divClassName = isSharp ? "key_sharp" : "key"
  if (isPressed){
    divClassName += "pressed"
  }
  return (
    
    <div className={divClassName}>
      <h1 className="noteText">{note.toUpperCase()}</h1>
    </div>
  );
}
export default Key;
