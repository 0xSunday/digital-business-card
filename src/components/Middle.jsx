import React from "react";
import MiddleTop from "./MIddleTop";
import MiddleAbout from "./MiddleAbout";

export default function Middle(){
  return (
    <div className="middle_section">
   <MiddleTop/>
   <button className="email_button">email</button>
   <MiddleAbout/>

    </div>
  )
}