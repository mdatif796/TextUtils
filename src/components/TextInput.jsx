import React, { useState } from "react";

export default function TextInput(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };
  const toTitleCase = () => {
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3 my-5">
        <h1>Enter the text below</h1>
        <textarea
          onChange={handleChange}
          style={{backgroundColor:props.mode==="light"?"white":"#13466e",color:props.mode==="light"?"black":"white"}}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary my-1">
        toUpperCase
      </button>
      <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-2 my-1">
        toLowerCase
      </button>
      <button disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary my-1">
        Clear Text
      </button>
      <button disabled={text.length===0} onClick={toTitleCase} className="btn btn-primary mx-2 my-1">
        First letter uppercase
      </button>
      <div className="my-2">
        <h2>Your text summary</h2>
        <p>
          {text.length === 0 ? 0 : text.split(" ").filter((element)=>{return element.length!==0}).length} words and{" "}
          {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
      </div>

      <h2>Preview</h2>
      <p>
        {text.length > 0 ? text : "Nothing to preview!"}
      </p>
    </>
  );
}
