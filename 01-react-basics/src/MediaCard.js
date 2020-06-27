import React from 'react';

const MediaCard = ({media}) => (
    <div>
    <h2>{media.title}</h2>
    <p>{media.body}</p>
    <img src={media.imageUrl}/>
    </div>
)
export default MediaCard;