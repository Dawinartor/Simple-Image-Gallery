import React, { useState } from 'react';
import Picture from './Picture';
import './PictureGallery.css';
//TODO: Get Images by server-side
import img1 from './pictures/flowers.jpg';


class PictureGallery extends React.Component(props) {
    
    const Pictures = props => {

        const [source, setSource] = useState([])
        const [title, setTitle] = useState([])
        const [date, setDate] = useState([])

        const pictureHandler = (source, title, date) => {
            setSource([source])
            setTitle([title])
            setDate([date])
        }
    };


    return(
        <div className="picture-gallery">
            { Pictures.map((picture, i) => <Picture source={picture.source} title={picture.title} createDate={picture.createDate} key={i} />) }
        </div>
    )
}

export default PictureGallery;