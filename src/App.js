import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState(`light`); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode = () => {
    if(mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = `#181a1c`;

    } else {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze :" mode={mode}/>}> */}
          <TextForm showAlert={showAlert} heading="Enter Text to analyze :" mode={mode}/>
          {/* </Route> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
