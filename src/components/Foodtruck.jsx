import React from "react";

const Foodtruck = (props) => {
    return(
        <div className="Foodtruck">
            <div className="picture">
                 <img src={props.src} alt="" />
            </div>
            <h3>{props.name}</h3>
            <h4>{props.style}</h4>
            <div className="linkContainer">
                <a href={props.link}>View Menu</a>
            </div>   
        </div>
    )
}

export default Foodtruck;