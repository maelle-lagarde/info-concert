import React from "react";

export default function Artiste ({ name, presentation, style, src, alt, url }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{presentation}</p>
            <p class="artist-style">Genre : {style}</p>
            <div className="bottom-card">
                <img src={src} alt={alt}/>
                <a href={url} target="_blank"><button id="url-button">en savoir plus</button></a>
            </div>
        </div>
    );
}