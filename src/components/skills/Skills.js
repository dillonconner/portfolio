import React, { useState } from "react";
import SkillBlock from "./SkillBlock";
import "./Skills.css";

const skillData = [
    {
        title: 'Frontend',
        skills: [
            {skill: 'JavaScript',   exp: '90', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
            {skill: 'TypeScript',   exp: '40', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png'},
            {skill: 'React',        exp: '80', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'},
            {skill: 'Angular',      exp: '50', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'},
            {skill: 'HTML',         exp: '70', iconSrc: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'},
            {skill: 'CSS',          exp: '70', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png'},
        ]
    },
    {
        title: 'Backend',
        skills: [
            {skill: 'Java',         exp: '90', iconSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png'},
            {skill: 'SpringBoot',   exp: '80', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/512px-Spring_Boot.svg.png'},
            {skill: 'Node.js',      exp: '70', iconSrc: 'https://www.netgains.org/wp-content/uploads/2014/01/node_js.png'},
            {skill: 'Express',      exp: '60', iconSrc: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'},
            {skill: 'PostgreSQL',   exp: '80', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'},
            {skill: 'MongoDB',      exp: '75', iconSrc: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'},
        ]
    },
    {
        title: 'Other',
        skills: [
            {skill: 'Azure',        exp: '30', iconSrc: 'https://swimburger.net/media/ppnn3pcl/azure.png'},
            {skill: 'Github',       exp: '70', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'},
            {skill: 'Docker',       exp: '50', iconSrc: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_plain_logo_icon_146554.png'},
            {skill: 'Netlify',      exp: '50', iconSrc: 'https://www.netlify.com/v3/img/components/logomark.png'},
            {skill: 'Trello',       exp: '100', iconSrc: 'https://logos-world.net/wp-content/uploads/2021/02/Trello-Emblem.png'},
            {skill: 'C++',          exp: '80', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png?20170928190710'},
            {skill: 'C',            exp: '60', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg'},
            {skill: 'Python',       exp: '50', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png'},
            
        ]
    },
];

const skillsReduced = [...skillData.map((block) => {
    return block.skills;
})].flat();

const Skills = () => {

    const [ showDetailed, setShowDetailed ] = useState(false);

    return (
        <div className="skills" onClick={e => setShowDetailed(!showDetailed)}>
            <h2>Skills</h2>
            {showDetailed ?
                <div>
                    <div className="skill-blocks">
                        {skillData.length > 0 &&
                            skillData.map((block, id) => <SkillBlock key={id} block={block} />)
                        }
                    </div>
                    <p className="small"></p>
                </div>
                :
                <div className="skill-icons">
                    {skillsReduced.map((skillItem, id) => {
                        return (
                            <div key={id} className="skill-icon">
                                <img src={skillItem.iconSrc} alt={skillItem.skill} />
                                <p>{skillItem.skill}</p>
                            </div>
                        )
                    })
                    }
                    
                </div>
            }
        </div>
    )
}
export default Skills