import React, { Component } from "react";
import FilterBox from "./FilterBox";

export default class Filter extends Component {
  state = {
    value: "",
    arr: [],
    games: [],
    region: [],
    team: []
  };

  changeHandler = e => {
    let filteredArr = this.props.FilterData.filter(game => {
      return (
        game.username.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({
      value: e.target.value,
      arr: [...filteredArr]
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  componentDidMount() {
    // isolate game array removing empty strings and duplicate inputs
    let games = this.props.FilterData.map(data => data.game);
    let gamesFiltered = games.filter(
      (data, index) => data && games.indexOf(data) === index
    );
    // isolate region array removing empty strings and duplicate inputs
    let region = this.props.FilterData.map(data => data.region);
    let regionFiltered = region.filter(
      (data, index) => data && region.indexOf(data) === index
    );
    // isolate team array removing empty strings and duplicate inputs
    let team = this.props.FilterData.map(data => data.team);
    let teamFiltered = team.filter(
      (data, index) => data && team.indexOf(data) === index
    );
    this.setState({
      games: gamesFiltered,
      region: regionFiltered,
      team: teamFiltered
    });
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.submitHandler}>
        <div>
          <input
            className="form-control"
            placeholder="search by player"
            value={this.state.value}
            onChange={this.changeHandler}
          />
        </div>

        <FilterBox names={this.state.arr} />

        <div className="text-left">
          <h3>Search By</h3>
          <div>
            <label>Game:</label>
            <select className="form-control">
              <option value="all">All</option>
              {this.state.games.map((game, index) => (
                <option key={index} value={game}>
                  {game}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Region:</label>
            <select className="form-control">
              <option value="all">All</option>
              {this.state.region.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Team:</label>
            <select className="form-control">
              <option value="all">All</option>
              {this.state.team.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          <br />
          <br />
          <div>
            <button className="btn button">filter</button>
          </div>
        </div>
      </form>
    );
  }
}
