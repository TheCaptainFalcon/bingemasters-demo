import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'

// Components
import Leaderboard from './components/Leaderboard';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Instructions from './components/Instructions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // dev test
    console.log(this.props);
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route exact path='/instructions' component={ Instructions }/>
            <Route exact path='/leaderboard' component={ Leaderboard}/>
            <Route exact path='/register' component={ Register }/>
          </Switch>
          
        </Router>
        
      </div>
    );
  }
};

export default connect(null, actions) (App);
