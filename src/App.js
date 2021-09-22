import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0

  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />

            
          <Switch>
            <Route exact path="/general"><News setProgress={this.setProgress} key="general" apiKey="a522e9179730451fbc1549a9b7e22369" category="general" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" apiKey="a522e9179730451fbc1549a9b7e22369" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" apiKey="a522e9179730451fbc1549a9b7e22369" category="entertainment" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" sapiKey="a522e9179730451fbc1549a9b7e22369" category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" apiKey="a522e9179730451fbc1549a9b7e22369" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" apiKey="a522e9179730451fbc1549a9b7e22369" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" apiKey="a522e9179730451fbc1549a9b7e22369" category="technology" /></Route>
          </Switch>

        </div>
      </Router>
    )
  }
}

