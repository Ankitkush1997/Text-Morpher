// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import './App.css';
;



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode =() =>{
    if (mode === 'light'){
    setMode("dark")
    document.body.style.backgroundColor = "#343a40";
    document.body.style.backgroundImage = "url('bgimagedark.jpg')";
    showAlert("Dark mode has been enabled", "success")
  }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = "url('bgimage.jpg')";
      showAlert("Light mode has been enabled", "success")

    }
    
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Morpher" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About /> */}
          {/* </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze " mode = {mode}/>
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
