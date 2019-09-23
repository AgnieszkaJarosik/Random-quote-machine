import React from 'react';

import './Author.css';

const Author = (props) => {
    return (
      <div id="author" className={`${props.isHidden ? " hidden" : "text"}`}>
       - {props.author}
      </div>
    );
}

export default Author;
