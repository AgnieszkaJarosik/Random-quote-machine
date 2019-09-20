import React from 'react';

import './Author.css';

const Author = (props) => {
    return (
      <div id="author" className={`text ${props.isHidden ? " hidden" : ""}`}>
       - {props.author}
      </div>
    );
}

export default Author;
