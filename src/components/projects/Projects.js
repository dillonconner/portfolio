import "./Projects.css"
import React from "react";
import decisionMakerImg2 from "../../resources/decisionmaker.png"
import decisionMakerImg1 from "../../resources/decisionmaker1.png"
import mycookbookImg from "../../resources/mycookbook.png"


const Projects = () => {

    return (
        <div className="projects" >
            <h2>Projects</h2>
            <p>**site backend may take a minute to instantiate after clicking login**</p>
            <div className="project">
                <div className="description">
                    <h3>Voting App <span className="small">(name pending)</span></h3>
                    <p>Voting app that allows users and their friends to vote on where to eat using the Google Places API </p>
                    
                    <h4>Built with</h4>
                    <p>React | Redux | Nodejs | MongoDb | Google Places</p>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://decision-maker1.netlify.app/"><button>Site</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dillonconner/decision-maker"><button>Repo</button></a>
                    
                    <p className="login-info">Demo Login</p>
                    <p>Username: demoUser</p>
                    <p>password: demoUser</p>
                </div>
                
                <div className="image-gallery">
                    <div className="image-wrapper">
                        <img src={decisionMakerImg1} alt="project" />
                    </div>
                    <div className="image-wrapper">
                        <img src={decisionMakerImg2} alt="project" />
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="description">
                    <h3>My Cookbook</h3>
                    <p>Recipe creation and editting tool that allows user to see different versions of their recipe</p>

                    <h4 >Built with</h4>
                    <p>React | Redux | Nodejs | MongoDb</p>

                    <a target="_blank" rel="noopener noreferrer" href="https://my-cookbook1.netlify.app/"><button>Site</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dillonconner/MyCookbook"><button>Repo</button></a>
                    
                    <p className="login-info">Demo Login</p>
                    <p>Username: demoUser</p>
                    <p>password: demoUser</p>
                    <p className="note">** image changes don't get reset like everything else so they may look weird **</p>
                </div>
                <div className="image-gallery">
                    <div className="image-wrapper">
                        <img src={mycookbookImg} alt="project" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects