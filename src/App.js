import "./App.css";
import Alert from "./componant/Alert";
import About from "./componant/About";
import FormBhar from "./componant/FormBhar";
import Navbar from "./componant/UparDekh";
// import Meme from "./componant/Meme";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //tells Dark Mode Status
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2f3336";
      showAlert("Dark mode is enable", "success");
      document.title = "TextUtil Dark";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode is enable", "success");
      document.title = "TextUtil Light";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<FormBhar heading="Input de Bhai" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          {/* <Meme/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
