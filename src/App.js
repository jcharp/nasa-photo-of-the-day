import React from "react";
import "./App.css";
import PhotoInfo from "./PhotoInfo";

function App() {
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun  */}
        JACKS NASA PHOTO OF THE DAY   <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <PhotoInfo />
    </div>
  );
}

export default App;
