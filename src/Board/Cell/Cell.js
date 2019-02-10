import React from 'react'

const Cell = (props) => {

  const fontColor = props.value === "X" ? "blue" : "red";

  const cellStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    border: "1px solid black",
    fontSize: "30px",
    color: fontColor
  }

  return (
    <div style={cellStyle} onClick={props.cellClick}>
        {props.value}
    </div>
  )
}


export default Cell;