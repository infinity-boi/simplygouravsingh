import React from 'react';

function ProjectCard({ src, link, h3, p, des }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p><i>{p}</i></p>
      <p style={{wordWrap: "break-word", maxWidth:"400px", fontSize:"16px"}}>{des}</p>
    </a>
  );
}

export default ProjectCard;