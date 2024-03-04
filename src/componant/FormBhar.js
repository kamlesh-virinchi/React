import React, { useState } from "react";

export default function FormBhar(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Automatically update text as whatever it is in textarea
  };
  const [text, setText] = useState("Enter Text Here");
  //text is state to change we have to use setText
  //we cant change value text direct we have to use setText it will change it
  return (
    <>
      <div className="container my-3 " style={{ color: props.mode === "dark" ? "#ffffff" : "#2f3336" }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="1" style={{ backgroundColor: props.mode === "dark" ? "#2f3336" : "#ffffff", color: props.mode === "dark" ? "#ffffff" : "#2f3336" }}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Sab Bada krna
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Sab Chotha krna
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Sab Hata
        </button>
      </div>
      <div className="container my-3 " style={{ color: props.mode === "dark" ? "#ffffff" : "#2f3336" }}>
        <h2>Tera Output Bhai</h2>
        <p>
          Sab word <b>{text.split(" ").length}</b> Aur lambayi <b>{text.length}</b>{" "}
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes me padha jayenga
        </p>
        <h4>Aapne ye likha hai :</h4> <p>{text}</p>
      </div>
    </>
  );
}
