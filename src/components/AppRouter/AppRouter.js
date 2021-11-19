import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '../../assets/css/index.css';
import NavBar from '../NavBar/NavBar'
import Quests from '../Quests/Quests';
import Skills from '../Skills/Skills';

const AppRouter = () => {
    return (
        <div className="ui-container">
            <NavBar/>
            
                <ul className="slider" >
                    <li className="screen" id="slide2">
                        <Quests/>
                    </li>
                    <li className="screen" id="slide5">
                        <Skills/>
                    </li>
                </ul>
            
        </div>
    )
}

export default AppRouter
