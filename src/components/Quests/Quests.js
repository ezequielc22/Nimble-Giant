import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Checkbox } from '@material-ui/core';
import React from 'react';
import { missionList } from '../../assets/Missions';

const Quests = () => {

    return (
        <div className="q-container">

            <div className="quests-container grand-min-box" >
                <div className="quests first-box" >
                    <p className="next-level margin-title" style={{color:"#d29c26"}}>QUESTS</p>
                </div>
        
                <div className="list-quests last-box" style={{display:"flex"}}>
                    <ul className="list" 
                    style={{listStyle:"none",padding:"0px", width:"100%", overflow:"auto", color:"#9b9999"}} >
                        <li style={{backgroundColor:"#d29c26", color:"black"}}>
                            <Checkbox  icon={<RadioButtonUncheckedIcon style={{color: "black"}} />} checkedIcon={<RadioButtonCheckedIcon style={{color: "black"}} />} />
                                PRINCIPAL QUESTS
                        </li>
                        {missionList.map((mission)=>{
                            return(
                                <li key={mission.id} style={{marginLeft:"42px",padding:"5px 0px"}}>
                            {mission.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="description-container grand-min-box" style={{height:"100%", maxWidth:"600px"}}>
                <div className="principial-quests first-box" style={{display: "flex"}}>
                    <h1 className="next-level white margin-title">PRINCIPAL QUESTS </h1>
                    <h1 className="next-level font-18"
                    style={{margin: "auto 8px 7px auto", color: "#d29c26"}}>STORY QUEST</h1>
                </div>
                <div className="description-quests last-box" 
                style={{display: "flex", height:"100%", flexDirection:"column"}}>
                    <div className="quests secondary-box" >
                        <h1 className="next-level "
                        style={{margin: "15px 30px", fontSize:"15px", color: "#d29c26"}}>OBJETIVE . TRACKER</h1>
                        <div className="white" style={{margin: "15px 20px"}}>
                            <Checkbox style={{color: "white"}}  
                            icon={<RadioButtonUncheckedIcon style={{color: "white"}} />} 
                            checkedIcon={<RadioButtonCheckedIcon style={{color: "white"}} />} 
                            />
                            MEET WITH MICHAEL IN THE SEWERS 
                        </div>
                        <p style={{margin: "10px 25px 10px 50px", fontFamily:"sans-serif", fontSize:"13px"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque enim 
                            atque aliquam ex obcaecati reiciendis quos voluptates blanditiis totam? Rem d
                            electus ratione nam ducimus! Ea excepturi praesentium doloribus fugit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque enim 
                            atque aliquam ex obcaecati reiciendis quos voluptates blanditiis totam? Rem d
                            electus ratione nam ducimus! Ea excepturi praesentium doloribus fugit!
                        </p>
                    </div>
                    <div className="quests secondary-box" style={{display:"flex"}}>
                        <div style={{marginTop:"50px"}}>
                            <h1 className="font-margin font-18" >REWARDS</h1>
                            <h1 className="font-margin font-13" >YOU WILL RECIVE</h1>
                            <h1 style={{fontSize:"30px", marginLeft:"50px", color:"white"}}>20000</h1>
                        </div>
                        <div style={{margin: "50px 8px 7px auto"}}>
                            <h1 className="font-margin font-18" >QUEST DETAIL</h1>
                            <div style={{display:"flex"}}>
                                <h1 className="font-margin font-13" >ASIGNED BY</h1>
                                <h1 className="font-18" 
                                style={{fontWeight: "100", marginLeft:"20px", marginTop:"4px", color:"white"}}>TROY</h1>
                            </div>
                            <div style={{display:"flex"}}>
                                <h1 className="font-margin font-13" >LOCATION</h1>
                                <h1 className="font-18" 
                                style={{fontWeight: "100", marginLeft:"20px", marginTop:"4px", color:"white"}}>OLD TOWN</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quests;
