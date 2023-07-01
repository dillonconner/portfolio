import "./Contact.css";
import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <h3>dillonconner@gmail.com</h3>
            <div className="icons-wrapper">
                <a target="_blank" href="https://github.com/dillonconner"><FaGithub /></a>
                <a target="_blank" href="https://www.linkedin.com/in/dillon-conner-917a44157/"><FaLinkedin /></a>
            </div>
            <p>Made by Dillon Conner</p>
        </div>
    )
}
export default Contact