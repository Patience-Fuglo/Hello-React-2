import React from 'react';
import Resume from "../Pat-Resume.pdf"

const AboutMe = () => {
  return (

    <div className="about">
      <div className="container">
        <h1 className="text">Welcome to my page!</h1>
        <p>
          My name is Patience Fuglo and this is my portfolio.
          I live in New York city and currently a student at Lehman College pursuing
          my bachelor's degree in Computer Science. After graduating, i hope to continue at a BootCamp to
          pursue a career in Software Engineering. I also would love to earn my Masters degree in Technology
          and cyber-security. In my spare time, i love to read and travel.
          Most importantly, i love me a cup of teeaa ssssp!
       </p>
        <a href={Resume} download>Resume</a>
      </div>
    </div>

  )
}

export default AboutMe;
