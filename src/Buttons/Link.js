import React from 'react';

import './Button.css';

const Link = (props) => {
    return (
      <a className="button" id={props.id} href={props.link} target="_blank" >
        {props.text}
      </a>
    );
}

export default Link;