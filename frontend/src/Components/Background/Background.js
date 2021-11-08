import { useEffect, useState } from 'react';
import './Background.css';

const Background = props => {
  const videoFormats = ['.mp4','.ogv','.webm','.mov','.avi','.wmv','.flv','.m4v'];
  const imageFormats = ['.jpg','.jpeg','.png','.gif','.bmp','.svg'];

  const renderBackground = () => {
    if (imageFormats.some(ext => props.background.includes(ext))) {
      return (
        <div className="background-image" style={{backgroundImage: `url(${props.background})`}}></div>
      );
    } else if (videoFormats.some(ext => props.background.includes(ext))) {
      return (
        <video className="background-video" autoPlay loop muted>
          <source src={props.background} type="video/mp4" />
        </video>
      );
    } else {
      return (
        <div className="background-image" style={{backgroundImage: `url('https://images.unsplash.com/photo-1503942142281-94af0aded523')`}} />
      )
    }
  }

  return (
    <div className="background">
      {renderBackground()}
    </div>
  )
}

export default Background;