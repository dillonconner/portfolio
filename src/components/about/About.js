import "./About.css";
import React from "react";
import resume from "../../static/Dillon_Conner_Resume.pdf";

const About = () => {

    return (
        <div className="about">
            <h2>About Me</h2>
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
                    <a href={resume} target="_blank" rel="noopener noreferrer"><button className="resume">Resume</button></a>
                </div>
                <div className="section blue">
                    <div className="section-header">
                        <h3>Summary</h3>
                    </div>
                    <p>Dillon Conner is a Software Developer looking for an opportunity to improve his skills while
                        working in a fast paced environment with enthusiastic coworkers. He excels at learning new technologies and 
                        is excited to learn from experienced professionals while helping develop complex and challenging software. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About