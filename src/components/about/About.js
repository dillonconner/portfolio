import "./About.css";
import React from "react";

const About = () => {

    return (
        <div className="about">
            <div className="about-header">
                <h2>About Me</h2>
            </div>
            <div className="sections">
                <div className="section">
                    <div className="section-header">
                        <h3>Education</h3>
                    </div>
                    <div className="section-item">
                        <h4 className="highlightB">Revature</h4>
                        <p>Trained in Full-Stack Development with <span className="bold">Angular</span>, 
                        <span className="bold"> Java</span>, <span className="bold">Spring Boot</span>, and <span className="bold">PostgreSQL </span> 
                            in teams using Agile methodologies and CI/CD pipelines with <span className="bold">Azure</span>,
                             <span className="bold"> Github</span>, and <span className="bold">Docker</span>. 
                        </p>
                    </div>
                    <div className="section-item">
                        <h4 className="highlightB">Virginia Tech</h4>
                        <p>BS Computer Engineering <span className="focus">(Focus: Machine Learning)</span></p>
                    </div>
                    <button className="resume">Resume</button>
                </div>
                <div className="section blue">
                    <div className="section-header">
                        <h3>Stuff</h3>
                    </div>
                    <p>Following graduation from Virginia Tech, Dillon Conner failed to find a job
                        because he - for some dumb reason - decided he wanted to get life experience with 
                        poor people jobs rather than only ever work in tech. </p>
                    <p>To combat this lack of internship, he chose to learn fullstack development so he could make projects on his
                        own that would serve as proof-of-intelligence to companies. He has now learned Angular through Revature and React on his own,
                        and is ready to further his skills at any job that will pay him

                    </p>
                </div>
            </div>
        </div>
    )
}
export default About