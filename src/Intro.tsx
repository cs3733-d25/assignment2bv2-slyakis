import { useState } from "react";
import "./App.css";

function Intro(props) {
    const [fullName, setFullName] = useState(props.username);
    const names = fullName.split(" / ");

    return (
        <>
            <h2>About Us</h2>
            <p>
                My name is {names[0]}. I am a second-year Computer Science student at
                Worcester Polytechnic Institute in Worcester, Massachusetts. I am an international
                student from Vietnam, though I've been living in the United States for the past
                six years since the start of high school.
            </p>
            <p>
                My name is {names[1]}. I'm a sophomore majoring in Computer Science at WPI.
                I'm from Manchester, NH. I'm
            </p>
        </>
    );
}

export default Intro;

