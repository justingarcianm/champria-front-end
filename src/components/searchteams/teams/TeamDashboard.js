import React, { Component } from "react";
import Teams from './Teams'
import TeamFilter from '../filter/TeamFilter'

import TeamData from '../../../TEAM_DATA.json'

export class TeamDashboard extends Component {
  state = {
    teamGame:"",
    teamRegion:"",
    isLookingForMembers:false,
    teamData:[]
  }

filterdData = () => {
  let newData = TeamData.filter( data => {
    return (data.game === this.state.teamGame || this.state.teamGame === "") && (data.region === this.state.teamRegion || this.state.teamRegion === "") && (data.isLookingForMembers === this.state.isLookingForMembers || this.state.teamRegion || this.state.teamRegion === "") && (data.isLookingForMembers === this.state.isLookingForMembers || this.state.teamRegion || this.state.teamRegion === "") && (data.isLookingForMembers === this.state.isLookingForMembers || !this.state.isLookingForMembers)
  })
  this.setState({
    teamData: [...newData]
  })
}
filterBy = (game, region, isLookingForMembers) => {
 console.log(game, region, isLookingForMembers)
 if(this.state.teamData){
  this.setState({
    teamData:[]
  })
}
this.setState({
  teamGame: game,
  teamRegion: region,
  isLookingForMembers
}, () => {
  this.filterdData()
})
}

  render() {
    return <div className="container-fluid">
      <br />
      <div className="row">
        <div className="col-2">
          <TeamFilter teamFilterData = {TeamData} filterBy={this.filterBy}/>
        </div>
        <div className="col-10">
          <Teams teamData={!this.state.teamData.length ? TeamData : this.state.teamData}/>
        </div>
      </div>
    </div>;
  }
}

export default TeamDashboard;
