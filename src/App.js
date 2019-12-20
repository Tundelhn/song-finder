import React, { Component } from 'react';
import Navbar from './Components/layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Components/layouts/Index';
import Lyrics from './Components/tracks/Lyrics';
import { Provider } from './Context';
import './App.css';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
