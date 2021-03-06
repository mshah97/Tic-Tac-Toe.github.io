import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'

import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'

// Create App component
class App extends React.Component {
    render() {
      return (
        <div className="app">
          <BrowserRouter>
            <Route exact path="/" component={Scoreboard}/>
            <Route path="/board" component={Board}/>
          </BrowserRouter>
        </div>
      )
    }
  }  

ReactDOM.render(<App />, document.getElementById('root'));


      
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();