import React, { useState } from 'react';
import Picture from './Picture';
import './PictureGallery.css';
//TODO: Get Images by server-side
import img1 from './pictures/flowers.jpg';


function PictureGallery() {
    
    const Pictures = props => {

        const [pictureCount, setPictureCount] = useState(0)
        const [pictures, setPictures] = useState([])

        useEffect(() => {
            // Fetch my back-end API
            fetch('172.22.142.174/public/images',
            {
                method: 'GET',
                headers: 
            })
            return () => {
                cleanup
            }
        }, [input])
    };


    return(
        <div className="picture-gallery">
            { Pictures.map((picture, i) => <Picture source={picture.source} title={picture.title} createDate={picture.createDate} key={i} />) }
        </div>
    )
}

export default PictureGallery;