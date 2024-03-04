import "./App.css";
import Alert from "./componant/Alert";
//import About from "./componant/About";
import FormBhar from "./componant/FormBhar";
import Navbar from "./componant/UparDekh";
// import Meme from "./componant/Meme";
import React, { useState } from "react";

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
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode is enable", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <FormBhar heading="Input de Bhai" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
        {/* <Meme/> */}
      </div>
    </>
  );
}

export default App;
