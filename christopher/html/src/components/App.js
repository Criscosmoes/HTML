import React from "react";
import "../App.css";

const App = () => {
  function onButtonClick() {
    console.log("this button was clicked");
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click me!</button>
    </div>
  );
};

export default App;
