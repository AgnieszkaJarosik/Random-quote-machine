import React from 'react';

import './Button.css';

const Button = (props) => {
  const handleClick = () => {
    props.onClick();
    // props.secondOnClick();
  }

    return (
      <button className="button" id={props.id} onClick={handleClick} >
        {props.text}
      </button>
    );
}

export default Button;