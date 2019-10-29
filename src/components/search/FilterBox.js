import React from "react";
import "./styles/FilterBox.css";
import { Link } from "react-router-dom";

export default function FilterBox(props) {
  return (
    <div id="filteredGames" className="text-left">
      <div className="row">
        <div className="col-12">
          {props.names.map(name => (
            <Link to={name.url}>
              <div className="row">
                <div className="col-4">
                  <img
                    src={name.img}
                    alt={name.username}
                    className="img-fluid"
                  />
                </div>
                <div className="col-8">
                  <p>{name.username}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
