import { Fragment } from 'react';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/JS/Home';
import About from './components/JS/About';
import Paint from './components/JS/Paint'
import Scul from './components/JS/Scul'
import Ilu from './components/JS/Ilu';
import Photo from './components/JS/Photo'
import Articles from './components/JS/Articles'

function App() {
  
  
  
  return (
    
    <Fragment>
       <Router>
         <Switch>
            <Route path='/iluss'>
                <Ilu/>
            </Route>
            <Route path='/arct'>

              <Articles/>

            </Route>
            <Route path='/photo'>

              <Photo/>

            </Route>
            <Route path='/scul'>

              <Scul/>

            </Route>
            <Route path='/paint'>

              <Paint/>

            </Route>
            <Route path='/about'>

              <About/>

            </Route>

            <Route path='/'>
             
              <Home/>

            </Route>

         </Switch>
       </Router>
    </Fragment>
  );
}

export default App;
