import React, {useState, useEffect} from 'react'
import '../../assets/css/index.css'
import { icon1,icon2, icon3 } from '../../assets/images'

const Card = (props) => {
    const[porcent, setPorcent] = useState("440")

    useEffect(() => {
        let aux = parseInt(props.levelProgress) / props.handleTotal;
        let aux2 = porcent - (porcent * aux)
        setPorcent(aux2);
    }, [])
    return (
       
                <div className="card">
                    <div className="porcent">
                        <svg>
                            <circle cx="70" cy="70" r="70"/>
                            <circle style={{strokeDashoffset: porcent}} cx="70" cy="70" r="70"/>
                        </svg>
                        <div className="number">
                            <object data={props.icon} type="image/svg+xml" style={{width: "60px"}}/>
                        </div>
                        
                    </div>
                </div>
            
    )
}

export default Card
