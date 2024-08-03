import React from "react";
import { image } from "../data/data";

function About() {
  return <div> 
           <about />
           <h2>About Me</h2>
           <p>My Name Is Brendan</p>
           <img src={image} alt="I made this" />
         </div>;
}

export default About;
