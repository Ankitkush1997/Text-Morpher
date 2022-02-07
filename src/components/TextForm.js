import React, { useState } from "react";
import "./clickButton.css"
export default function TextForm(props) {
  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoclick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };
  const ClearText = () => {
    setText("");
    props.showAlert("Text Cleared ", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied  ", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container mt-5 "
        style={{ color: props.mode === "dark" ? "white" : "#343a40" }}
      >
        <h1 style= {{color:"#1a949a"}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === "dark" ? "white" : "#343a40",
              borderRadius: "30px 2px 30px 2px"
            }}
          ></textarea>
        </div>
        <div>
          <button
            disabled={text.length===0}
            className="newbutton"
            onClick={handleUpclick}
            style={{ marginRight: "5px", marginBottom:"3px"}}
          >
            Convert to Uppercase
          </button>
          <button
          disabled={text.length===0}
            className="newbutton"
            onClick={handleLoclick}
            style={{ marginRight: "5px",marginBottom:"3px" }}
          >
            Convert to Lowercase
          </button>
          <button 
          disabled={text.length===0}
          className="newbutton" onClick={ClearText} style ={{marginRight:"5px",marginBottom:"2px"}}>
            Clear Text
          </button>
          <button 
          disabled={text.length===0}
          className="newbutton" onClick={handleCopy} style ={{marginRight:"5px",marginBottom:"2px"}}>
            Copy Text
          </button>
          <button
          disabled={text.length===0}
            className="newbutton"
            onClick={handleExtraSpace}
          >
            Remove Extraspaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#343a40" }}
      >
        <h2 style= {{color:"#1a949a"}}>Your Text Summary</h2>
        <p>
          You Typed {text === /\s+/ ? "0" : text.length - text.split(/\s+/).length + 1} Character And{" "}
          {text === "" ? "0" : text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words
        </p>
        <p>{text ===""  ? "0" : 0.008*60 * text.split(" ").filter((element)=>{return element.length!==0}).length} seconds are taken in read</p>
        <h2 style= {{color:"#1a949a"}}>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something into the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
