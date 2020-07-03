import React from "react";

import "./style/InputText.css";

function InputText(props) {
  const { onChange, value, placeholder, onSubmit } = props;
  function onTextChange(event) {
    const value = event.target.value;
    onChange(value);
  }

  function keyUp(event) {
    if (event.key === "Enter") {
      onSubmit();
    }
  }

  return (
    <label className="inputText">
      <input
        placeholder={placeholder}
        value={value}
        type="text"
        onKeyUp={keyUp}
        onChange={onTextChange}
      />
    </label>
  );
}

export default InputText;
