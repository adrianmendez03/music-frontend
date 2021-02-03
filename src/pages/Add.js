import React from 'react'

import Form from '../components/Form'

const Add = ({ data }) => {

    const emptyArtist = {
        name: "",
        albums: [],
        image: ""
    }

    const emptyAlbum = {
        title: "",
        yearReleased: 0,
        artist: "",
        image: ""
    }

    const formData = data === "artist" ? emptyArtist : emptyAlbum

    const loading = () => <h2>Loading ...</h2>

    const loaded = () => {
        return (
            <div className="page">
                <div className="section-header">
                    {data}
                </div>
                <Form formData={formData} type="add"/>
            </div>
        )
    } 

    return  data ? loaded() : loading() 

}

export default Add