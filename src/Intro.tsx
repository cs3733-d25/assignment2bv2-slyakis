import React from "react";
import "./App.css"; // Import the CSS file for styling

const Intro: React.FC = () => {
    return (
        <div className="intro-container">
            <div className="intro-box">
                <p>
                    My name is Kaylie Quach. I am a second-year Computer Science student
                    at Worcester Polytechnic Institute in Worcester, Massachusetts. I am
                    an international student from Vietnam, though I've been living in the
                    United States for the past six years since the start of high school.
                </p>
            </div>
            <div className="intro-box">
                <p>
                    My name is Christine Ngo. I'm a sophomore majoring in Computer
                    Science at WPI. I'm from Manchester, NH.
                </p>
            </div>
        </div>
    );
};

export default Intro;

