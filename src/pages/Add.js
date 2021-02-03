import React from 'react'

import Form from '../components/Form'

const Add = (props) => {

    const { data, url, getData } = props

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

    const handleCreate = (newData) => {
        console.log(newData)
        formData === 'artist' ? (
            fetch(url + '/artists', {
                method: "post",
                headers: {
                    "Content-Type": "applications/json"
                },
                body: JSON.stringify(newData)
            }).then(() => {
                getData()
                props.history.push('/')
            })
        ) : (
            fetch(url + '/albums', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newData)
            }).then(() => {
                getData()
                props.history.push('/')
            })
        )
    }

    const loading = () => <h2>Loading ...</h2>

    const loaded = () => {
        return (
            <div className="page">
                <div className="section-header">
                    {data}
                </div>
                <Form formData={formData} handleSubmit={handleCreate} type="add"/>
            </div>
        )
    } 

    return  data ? loaded() : loading() 

}

export default Add