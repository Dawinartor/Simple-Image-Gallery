import React from 'react';
import Picture from './Picture';
import './PictureGallery.css';
import img1 from './pictures/flowers.jpg';
import img2 from './pictures/ripJPG.jpg';

function PictureGallery() {
    const pictures = [
        {source: img1, title: "Hallo", createDate: "19.06.1996" },
        {source: img2, title: "Bye", createDate: "22.08.21" }
    ];
    

    return(
        <div className="picture-gallery">
            { pictures.map((picture, i) => <Picture source={picture.source} title={picture.title} createDate={picture.createDate} key={i} />) }
        </div>
    )
}

export default PictureGallery;