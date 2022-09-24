// import React from "react";
import React, { useState } from 'react';
// import CamelCase from 'react-camelcase';
import camelCase from 'camelcase';
  
export default function TextForm(props) {
   const HandleUpClick = ()=>{
        // console.log("Upper case is click");
        let newText = Text.toUpperCase(Text);
        console.log(newText);
        setText(newText);
    }
    const HandleLoClick=()=>{
        let newText1 = Text.toLowerCase(Text);
        setText(newText1);
    }
  
    const HandleCmCase = ()=>{
       let newText2 = camelCase(Text  ,{pascalCase: true});
       setText(newText2);

    }

   const HandleOnChange = (event)=>{
        console.log("change on is click");
        setText(event.target.value);
    }
    const [Text, setText] = useState("Enter text here");
  return (
   
    <div>
      <div className="mb-3">
        <h1>{props.Heading} </h1>

        <textarea
          className="form-control" value={Text} onChange={HandleOnChange} id="mybox"rows="12"></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary" onClick={HandleLoClick}>convert to LowerCase</button>
      <button className="btn btn-primary" onClick={HandleCmCase}>Convert to CamelCase</button>
    </div>
  );
}
