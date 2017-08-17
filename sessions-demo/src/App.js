import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Express Sessions + React</h2>
        </div>
        <HashRouter>
          <div className='comps'>
            <div className='links'>
              <Link to='/'>Home</Link>
              <Link to='/login'>Login</Link>
              <Link to='/profile'>Profile</Link>
            </div>
             <Switch> 
               Is this being displayed?
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/profile' component={Profile}/>
             </Switch> 
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
