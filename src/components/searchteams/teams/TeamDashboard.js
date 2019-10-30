import React, { Component } from "react";
import Teams from './Teams'
import TeamFilter from '../filter/TeamFilter'

import TeamData from '../../../TEAM_DATA.json'

export class TeamDashboard extends Component {
  state = {
    teamGame:"",
    teamRegion:"",
    teamMembers:"",
    teamData:[]
  }


  render() {
    return <div className="container-fluid">
      <br />
      <div className="row">
        <div className="col-2">
          <TeamFilter teamFilterData = {TeamData}/>
        </div>
        <div className="col-10">
          <Teams teamData={TeamData}/>
        </div>
      </div>
    </div>;
  }
}

export default TeamDashboard;
