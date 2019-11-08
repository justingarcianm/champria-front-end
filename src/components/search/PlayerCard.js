import React from "react";
import { Link } from "react-router-dom";

export default function PlayerCard(props) {
  return (
    <div className="col-3 container player-container">
      <div key={props.id} className="player-card card text-left">
        <Link to={`/player/${props.url}/page`}>
          <div className="row background">
            <div className="col-sm-5">
              <img
                src={props.img}
                alt={"profile image for " + props.name}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-7 my-auto">
              <h5 className="username">{props.name}</h5>
            </div>
          </div>

          <div className="row ">
            <div className="col ">
              <p>Game: {props.game ? props.game : "N/A"}</p>
              <p>Region: {props.region ? props.region : "N/A"}</p>
              <p>Team: {props.team ? props.team : "N/A"}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
