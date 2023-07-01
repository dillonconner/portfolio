import "./Navbar.css";
import React from "react";

const Navbar = () => {

    const goToAbout = (e) => {
        document.getElementsByClassName('about')[0]?.scrollIntoView({behavior: "smooth", block: "center"});
    }
    const goToProjects = (e) => {
        const projects = document.getElementsByClassName('projects')[0];
        projects.scrollIntoView({behavior: "smooth", block: "start"});
    }
    const goToSKills = (e) => {
        document.getElementsByClassName('skills')[0]?.scrollIntoView({behavior: "smooth", block: "center"});
    }
    const goToContact = (e) => {
        document.getElementsByClassName('contact')[0]?.scrollIntoView({behavior: "smooth", block: "center"});
    }
    
    return (
        <div className="navbar">
            <h2>Dillon Conner</h2>
            <div className="nav-wrapper">
                <nav>
                    <button onClick={goToAbout}>About</button>
                    <button onClick={goToProjects}>Projects</button>
                    <button onClick={goToSKills}>Skills</button>
                    <button onClick={goToContact}>Contact</button>
                </nav>
            </div>
        </div>
    )
}
export default Navbar