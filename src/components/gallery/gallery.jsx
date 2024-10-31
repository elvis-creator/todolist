import React, { useEffect, useState } from 'react'
import "./gallery.css"
import axios from 'axios'


const Gallery = () => {
       const[gallery, setGallery ] = useState([])

       const fetchPhotos = async() => {
        const response= await axios.get("https://jsonplaceholder.typicode.com/photos");
        const data = response.data;
        setGallery(data);  //setter function

        console.log("Photos",response);
       }

      useEffect(() => {
        fetchPhotos()
      }, [])
      

  return (
    <div className="photolist-container">
    {gallery && gallery.map((photo) => (
      <div key={photo.id} className="photo-item">
        <h1 className="photo-title">{photo.title}</h1>
        <img src={photo.url} alt="" />
      </div>
    ))}
  </div>
  )
}

export default Gallery