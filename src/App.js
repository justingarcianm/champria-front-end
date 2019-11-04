import React from "react";
// Routes
import Navbar from "./components/topandbottom/Navbar";
import Footer from "./components/topandbottom/Footer";
import SearchDashboard from "./components/search/SearchDashboard";
import TeamDashboard from "./components/searchteams/teams/TeamDashboard";
import PlayerAccount from "./components/players/PlayerAccount";
import TeamAccount from "./components/teams/TeamAccount";
import MainSplash from "./components/splash/MainSplash";
import Login from "./services/authorization/Login";
import Register from "./services/authorization/Register";
import PlayerSettings from "./components/Settings/PlayerSettings";
import TeamSettings from "./components/Settings/TeamSettings";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainSplash} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search_player" component={SearchDashboard} />
          <Route exact path="/search_team" component={TeamDashboard} />
          <Route exact path="/player_account" component={PlayerAccount} />
          <Route exact path="/team_account" component={TeamAccount} />
          <Route exact path="/team_settings" component={TeamSettings} />
          <Route exact path="/player_settings" component={PlayerSettings} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
