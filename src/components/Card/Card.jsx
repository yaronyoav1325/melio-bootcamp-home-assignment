import React, { useEffect, useState } from "react";
import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";
import "./Card.css";


// card React componenet
export const Card = (props) => {
  
  // isHovering = true <=> the mouse is hovering the card
  const [isHovering, setHovering] = useState(false);

  // isClicked = true <=> the facoriteIcon has been clicked
  const [isClicked, setClicked] = useState(false);

  // cursor = type of cursor (either deafult or pointer)
  const [cursor, setCursor] = useState('defualt');
  
  // event of clicking the favoriteIcon
  const handleFavoriteClick = () => {
    // raise the number reference by one and change the updated variable
    // this mechanism allows the home page to notice a state change
    // which ultimately causes data backup
    props.number.current = props.number.current+1;
    props.update(props.number.current);

    // update relevant variables
    props.person.isFavorite = !isClicked;
    setHovering(false);
    setClicked(!isClicked);
  };
 
 
  // returns the react component
  return (
    <div className="card" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <div className="photo">
            <img className = "personPhoto" src={props.person.picture.medium}></img>
      </div>
      <div className="details">
        <div className = "firstRow">
          <div className = "name">{props.person.firstName + " " +props.person.lastName} </div>
          <div hidden={props.person.isPreferred ? undefined : "hidden"} className = "preferred">{props.person.isPreferred ? "PREFERRED" : undefined}</div>
        </div>
        <div className = "email">{props.person.email}</div>
        <div className = "location">{props.person.city +", " +props.person.country}</div>
      </div>
      <div className="favorite">
          <FavoriteIcon className="favoritePhoto" onClick={handleFavoriteClick} mouse={setCursor} cursor={cursor} isHovering ={isHovering} isClicked={isClicked} isFavorite={props.person.isFavorite}></FavoriteIcon>
      </div>
    </div>
  );
};
