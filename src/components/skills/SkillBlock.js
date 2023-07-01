import React from "react";
import Skill from "./Skill";

const SkillBlock = ({block}) => {

    return (
        <div className="skill-block">
            <h3>{block.title}</h3>
            {block.skills.map((skill, id) => <Skill key={id} skillItem={skill} />)}
        </div>
    )
}
export default SkillBlock