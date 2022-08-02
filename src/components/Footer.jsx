import React from "react";
import {BsTwitter } from "react-icons/bs";
import {BsFacebook } from "react-icons/bs";
import {BsGithub } from "react-icons/bs";
export default function Footer(){
  return (
    <div className="icons">
      <BsFacebook  className="facebook"/>
      <BsTwitter  className="twitter"/>
      <BsGithub />
    </div>
  )
}