import React from "react"

export default function Projects(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div style={{width:'100%', display: 'flex', justifyContent: 'space-evenly'}}>
        <img
          style={{ height: "600px" }}
          src={`/assets/${props.imageUrl}1.png`}
        />{" "}
        <img
          style={{ height: "600px" }}
          src={`/assets/${props.imageUrl}2.png`}
        />{" "}
        <img
          style={{ height: "600px" }}
          src={`/assets/${props.imageUrl}3.png`}
        />
      </div>
    </div>
  )
}
