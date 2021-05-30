import React from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {original,romantic,horror,action,comedy,trending} from './url'


function App() {
  return (
    <div >
    <NavBar />
    <Banner />
    <RowPost url={original} title='Netflix Original' />
    <RowPost url={trending} title="Trending" isSmall/>
    <RowPost url={romantic} title="Romantic" isSmall/>
    <RowPost url={horror} title="Horror" isSmall/>
    <RowPost url={action} title="Action" isSmall/>
    <RowPost url={comedy} title="Comedy" isSmall/>

    </div>
  );
}

export default App;
