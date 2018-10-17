import React from 'react';
import './Historique.css';


const HistoryCard =({property})=>{
        const {index,image,date,texte,titre}=property
        return(
            <div id={`card-${index}`} className="HistoryCard">
                 <img src={image} alt={index}/>
                 <div className="details">
                    <h5>{titre}></h5>
                    <h6>{date}</h6>
                    <p>{texte}</p>

                 </div>
               
               
            </div>
        )
    }


export default HistoryCard;