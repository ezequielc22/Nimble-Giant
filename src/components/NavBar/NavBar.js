import { Button } from '@material-ui/core';
import React, {useState} from 'react';


const NavBar = () => {
    const[style1,setStyle1] = useState({color: "#9b9999"});
    const[style2,setStyle2] = useState({color: "#9b9999"});

    const handleStyles = {
        color: " #cfcfcf",
        borderColor: " #cfcfcf",
        padding: "5px 11px",
        minWidth :"0px",
        lineHeight: 1,
    }

    const active1=()=>{
        setStyle1({
            color: "#d29c26",
            textShadow: "1px 1px 10px #d29c26"
        })
        setStyle2({
            color: "#9b9999"
        })
        
    }
    const active2=()=>{
        setStyle2({
            color: "#d29c26",
            textShadow: "1px 1px 10px #d29c26"
        })
        setStyle1({
            color: "#9b9999"
        })

    }
    return (
        <div className="container">
            <ul className="menu">
                <li className="btn">
                    <Button variant="outlined" style={handleStyles}>Q</Button>
                </li>

                <li className="sl">
                    <a href="#slide1">MAP</a>
                </li>
                <li className="sl">
                    <a href="#slide2" onClick={active1} style={style1}>QUESTS</a>
                </li>
                <li className="sl">
                    <a href="#slide3">INVENTORY</a>
                </li>
                <li className="sl">
                    <a href="#slide4">BLUEPRINT</a>
                </li>
                <li className="sl">
                    <a href="#slide5"onClick={active2} style={style2}>SKILLS</a>
                </li>
                <li className="btn">
                <Button variant="outlined"style={handleStyles}>E</Button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
