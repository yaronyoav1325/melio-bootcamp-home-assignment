import React, {useEffect, useRef, useState} from "react";
import "./Favorites.css";
import {fetchCandidates} from "../../utils/API.js";
import {getPersistentCandidatesData, setPersistentCandidatesData, transformCandidatesData} from "../../utils/helper.js";
import {FavoriteIcon} from "../../components/FavoriteIcon/FavoriteIcon";
import { Card } from "../../components/Card/Card.jsx";




export const Favorites = () => {


    const [candidates,setCandidatesFunction] = useState({})
    
    useEffect(() => {
        runOnFavoritePageLoad();
    }, []);


  const runOnFavoritePageLoad = async () => {
    
    const data = getPersistentCandidatesData();
    if (data) {
      setCandidatesFunction(data);
    } else {

    }
  }
  
  const createComponentArray =  (candidatesObj) => {
    let componentArray = []
    const keys = Object.keys(candidatesObj);
    keys.forEach((letterIndex,key1) => {
      candidatesObj[letterIndex].forEach((person,key2) => {
          if(person.isFavorite){
            componentArray.push(<Card key = {key1*10+key2} person={person}/>);
          }  
     });
    });
    return componentArray;
  };

  const componentArray = createComponentArray(candidates); 
  const noFavorite = React.createElement(
    "div",
    {className:"noFavorites"},
    "You don't  any favorite candidates yet"
  );

  return (
    <div id="favorites">
        <div className="alldata">
            <div className="favorites-title">Favorite candidates</div>
            <div className="favorites-subtitle">yoav Yaron</div>
            <div className="candidates-list">
                {componentArray.length == 0 ? noFavorite : componentArray}
            </div>
        </div>
    </div>
  );
};
