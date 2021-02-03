import React from 'react'

import './Home.css'

const Home = props => {

    const { albums, artists } = props

    const renderAlbums = () => {
        return albums.map((album, index) => {
            return (
                <div className="album" key={index}>
                    <div className="image" style={{background: `url(${album.image})`, backgroundSize: 'contain'}}></div>
                    <div className="subtext">
                        <div className="title">{album.title}</div>
                        <div className="artist">{album.artist.name}</div>
                    </div>
                </div>
            )
        })
    }

    const renderArtists = () => {
        return artists.map((artist, index) => {
            return (
                <div className="artist">
                    <div className="image" key={index} style={{background: `url(${artist.image})`, backgroundSize: 'contain'}}></div>
                    <div className="subtext">
                        <div className="name">{artist.name}</div>
                    </div>
                </div>
            )
        })
    }

    const loading = () => <h2>Loading . . .</h2>

    return (
        <div id="Home">
            <section className="albums-section">
                <div className="section-header">Albums</div>
                <div className="albums-container">
                    { albums ? renderAlbums() : loading() }
                </div>
            </section>
            <section className="artists-section">
                <div className="section-header">Artists</div>
                <div className="artists-container">
                    { artists ? renderArtists() : loading() }
                </div>
            </section>
        </div>
    )
}

export default Home