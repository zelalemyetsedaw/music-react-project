// App.js

import React from 'react';
import SongList from './pages/SongList';
import AddSong from './pages/AddSong';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Details from './pages/Details';
import Aboutus from './pages/Aboutus';
import UpdateMusic from './pages/UpdateMusic';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route index element = {<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/SongList' element={<SongList/>} />
        <Route path='/AddSong' element={<AddSong/>} />
        <Route path='/AboutUs' element={<Aboutus/>}/>
        <Route path='*' element={<NoPage/>} />
        <Route path="/SongList/:id" element={<Details/>} />
        <Route path="/updatemusic/:id" element={<UpdateMusic/>} />

      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
