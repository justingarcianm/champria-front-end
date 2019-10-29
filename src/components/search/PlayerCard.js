import React from "react";
import { Link } from "react-router-dom";

export default function PlayerCard(props) {
  return (
    <div className="col-3">
      <div key={props.id} className="card text-left">
        <Link to={props.url}>
          <div className="row">
            <div className="col-5">
              <img
                src={props.img}
                alt={"profile image for " + props.name}
                className="img-fluid"
              />
            </div>
            <div className="col-7 my-auto">
              <h4 className="">{props.name}</h4>
            </div>
          </div>
        </Link>
        <hr />
        <div className="row ">
          <div className="col ">
            <p>Game: {props.game ? props.game : "N/A"}</p>
            <p>Region: {props.region ? props.region : "N/A"}</p>
            <p>Team: {props.team ? props.team : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
