import React from "react";

const Skill = ({skillItem}) => {

    return (
        <div className="skill">
            <div className="skill-name">
                <img src={skillItem.iconSrc} alt={skillItem.skill} />
                <h3>{skillItem.skill}</h3>
            </div>
            
            <div className="empty-bar">
                <div className="fill" style={{width: skillItem.exp + '%'}}></div>
            </div>
        </div>
    )
}
export default Skill