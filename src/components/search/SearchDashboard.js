import React, { Component } from "react";
import Filter from "./Filter";
import Players from "./Players";
import PlayerData from "../../DUMMY_DATA.json";

export default class SearchDashboard extends Component {
  filterBy = (game, region, team) => {
    console.log(game, region, team);
  };
  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-2">
            <Filter FilterData={PlayerData} filterBy={this.filterBy} />
          </div>
          <div className="col-10">
            <Players PlayerData={PlayerData} />
          </div>
        </div>
      </div>
    );
  }
}
