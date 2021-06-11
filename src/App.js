import React from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {original,romantic,horror,action,comedy,trending} from './url'


function App() {
  return (
    <div >
      <Router>
        <Route exact path='/'>
        <Login />

        </Route>
        <Route path='/netflix'>
        <NavBar />
    <Banner />
   
    <RowPost url={original} title='Netflix Original' />
    <RowPost url={trending} title="Trending" isSmall/>
    <RowPost url={romantic} title="Romantic" isSmall/>
    <RowPost url={horror} title="Horror" isSmall/>
    <RowPost url={action} title="Action" isSmall/>
    <RowPost url={comedy} title="Comedy" isSmall/>
        </Route>
      </Router>
    

    </div>
  );
}

export default App;
