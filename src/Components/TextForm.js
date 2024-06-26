import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Capital form", "success");
  };

  const handleScClick = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  const characterCount = text.length;
  const readingTime = 0.008 * wordCount;

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === 'dark' ? '#23396f' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeClick}>
          Capitalize Every Word
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleScClick}>
          Convert to Sentence Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>Your text summary</h1>
        <p>{wordCount} words, {characterCount} characters</p>
        <p>{readingTime.toFixed(3)} Minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
      </div>
    </>
  );
}
