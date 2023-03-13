import React from 'react';

const Link = (props) => {
  return (props.trigger) ? (
    <div className="dogLink">
        <div className="dogLink-contents">
            Get dog images <a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer">
                here</a>!
            <button className="x-button" onClick={() => props.setTrigger(false)}>X</button>
        </div>
    </div>
  ) : "";
}

export default Link