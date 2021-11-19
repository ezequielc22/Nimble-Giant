import React from 'react'
import Card from '../Card/Card'
import { icon1,icon2, icon3 } from '../../assets/images'


const Skills = () => {
    const skillItems = [{
            name: "SURVIVOR",
            level: "11",
            progress: "21660",
            points: "0",
            icon: icon1
        },
        {
            name: "AGILITY",
            level: "10",
            progress: "40000",
            points: "1",
            icon: icon2
        },
        {
            name: "POWER",
            level: "11",
            progress: "32500",
            points: "0",
            icon: icon3
        }]
    const handlePaint = (points) =>{
        if (points>0){
            return({color: "#fff"});
        }
    }
    const handleTotal = (level) =>{
        if (level==11){
            return("65000");
        }
        else{
            return("50000")
        }
    }

    return (
        <div className="q-container">

            {skillItems.map((skill, index)=>{
                
                return(
                <div key={index}className="cards grand-min-box">
                <div className="quests primary-box skill-title"style={{display:"flex"}}>
                    <h1 style={{margin: "auto", fontSize: "40px", fontWeight: "100"}}>{skill.name}</h1>
                    <h1 className=" level right-items" >{skill.level}</h1>
                </div>
                <div className="quests secondary-box">
                    <Card levelProgress={skill.progress} level={skill.level} icon={skill.icon} handleTotal={parseInt(handleTotal(skill.level))}/>
                </div>
                <div className="quests primary-box">
                    <h1 className="next-level ">Next Level </h1>
                    <h1 className="next-level right-items" >{skill.progress} /{handleTotal(skill.level)}</h1>
                </div>
                <div className="quests primary-box" >
                    <h1 className="next-level "style={handlePaint(skill.points)}>SKILL POINTS  </h1>
                    <h1 className="next-level right-items" style={handlePaint(skill.points)}>{skill.points} </h1>
                </div>
                </div>

            )
            }
            )
            }
        </div> 
    )
}

export default Skills
