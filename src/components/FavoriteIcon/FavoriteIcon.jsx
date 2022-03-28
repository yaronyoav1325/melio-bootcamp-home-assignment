import React from "react";
import "./FavoriteIcon.css";


export const FavoriteIcon = (props) => {
  return (
    <div className="favorite-icon-wrapper" hidden={(props.isHovering) || (!props.isHovering && props.isClicked) || (props.isFavorite) ? undefined : "hidden"}>
      <svg id="heartIcon" xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 25 25"  onClick={props.onClick} onMouseEnter={() => props.mouse("pointer")} style={{cursor:props.cursor}}>
        <path
          d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
      </svg>

    </div>
  );
};
