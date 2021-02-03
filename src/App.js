import React, { useEffect, useState } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Nav from './components/Nav'

function App() {

  const url = "https://music-am.herokuapp.com"

  const [artists, setArtists] = useState(null)
  const [albums, setAlbums] = useState(null)

  const getArtist = async () => {
    const response = await fetch(url + '/artists')
    const data = await response.json()
    setArtists(data)
  }

  const getAlbums = async () => {
    const response = await fetch(url + '/albums')
    const data = await response.json()
    setAlbums(data)
  }

  useEffect(() => {
    getArtist()
    getAlbums()
  }, [])

  return (
    <div className="App">
      <Nav />
      <main className="main-container">
        <Switch>
          <Route exact path="/" render={routerProps => <Home {...routerProps} albums={albums} artists={artists}/>}/>
          <Route exact path="/albums/add" render={renderProps => <Add data="album"/>}/>
          <Route exact path="/albums/edit" render={renderProps => <Edit data="album"/>}/>
          <Route exact path="/artists/add" render={renderProps => <Add data="artist"/>}/>
          <Route exact path="/artists/edit" render={renderProps => <Edit data="artist"/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
