import React from 'react';

import './Button.css';

const Button = (props) => {
    return (
      <button className="button" id={props.id} onClick={props.onClick} >
        {props.text}
      </button>
    );
}

export default Button;