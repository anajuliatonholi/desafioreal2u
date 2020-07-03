import React from "react";

import "./style/InputText.css";

function InputText(props) {
  const { onChange } = props;
  function onTextChange(event) {
    const value = event.target.value;
    onChange(value);
  }
  return (
    <div className="inputText">
      <input type="text" onKeyUp={onTextChange} />
    </div>
  );
}

export default InputText;
