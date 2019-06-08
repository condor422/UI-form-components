import React from 'react';

import './App.css';
import Album from './components/Album';
import AlbumForm from './components/album_form';
import Albums from './components/album_list';
import NavBar from './components/NavBar';
import CourseList from './components/AlbumList';

function App() {
  return (
    <div className="App">
        <NavBar />
      <CourseList />
      <hr />
      <Albums />
    </div>
  );
}

export default App;
