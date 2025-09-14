
import React from 'react';
import "./Card.css";
import frontendimg from "../../assets/frontendblackbg-removebg-preview.png"

function Card({ title, image, link }) {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div className="hoverCard">
        <img src={image} alt={title} />

        {/* Show the link icon only if `link` is passed */}
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="liveLink"
          >
            <img 
              src="https://img.icons8.com/ios-filled/50/cyan/external-link.png" 
              alt="Live Project Link" 
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
