// Das ist die Webseite der WebApp

// Importiere standart React Bibliotheken
import React from 'react';
import ReactDOM from 'react-dom';
// Die eigene Style Datei
import './index.css';
import PictureGallery from './PictureGallery'



ReactDOM.render(
    <React.StrictMode>
      <PictureGallery />
    </React.StrictMode>,
    document.getElementById('root')
  );

//reportWebVitals(console.log);