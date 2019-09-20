import React from 'react';

import './QuotesText.css';

const QuotesText = (props) => {
    return (
      <div id="text" className={`quote ${props.isHidden ? " hidden" : ""}`}>
        <i className="icon-quote"></i>
       {props.text}
      </div>
    );

}

export default QuotesText;
