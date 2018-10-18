import React from 'react';
import './Historique.css';


const HistoryCard =({property})=>{
        const {index,image,date,texte,titre}=property
        return(
            <div id={`card-${index}`} className="HistoryCard">
                 <h5 className="histoireTitre">{titre}</h5>
                 
                 <div className="details">
                 <img className="histoireImage" src={image} alt={index}/>
                    <p className="histoireTexte">{texte}</p>
                    <h3 className="histoireDate">{date}</h3>
                 </div>
               
               
            </div>
        )
    }


export default HistoryCard;