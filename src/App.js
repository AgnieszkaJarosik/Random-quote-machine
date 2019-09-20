import React from 'react';
import Quotes from './Fetch.js';
import Author from './Author/Author';
import QuotesText from './QuotesText/QuotesText';
import Button from './Buttons/Button';

import './App.css';
import './fontello/css/fontello.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      quote: {},
      backgroundColor: ['#dbc08a', '#c9a14f', '#c3963c', '#d6b676', '#cca353', '#c4963b'],
      textColor: ['#433d3d', '#6b6161', '#867979', '#786d6d', '#5e5555', '#363030'],
      nr: 1,
      isTextHidden: false
    };

    this.takeQuotes = this.takeQuotes.bind(this);
    this.changeBg = this.changeBg.bind(this);
  }
  
  componentDidMount() {
    this.takeQuotes();
  }

  takeQuotes() {
    this.setState({ isTextHidden: true });
    this.changeBg();
    Quotes.take()
    .then( quote => {
      this.setState( {quote: quote} )
      this.setState({ isTextHidden: false });
    })
  }

  changeBg() {
    let root = document.documentElement;
    let num;

    do {
      num = Math.floor(Math.random() * this.state.backgroundColor.length);
    } while(num === this.state.nr)
    
    root.style.setProperty('--bgColor', this.state.backgroundColor[num]);
    root.style.setProperty('--tColor', this.state.textColor[num]);

    this.setState({nr: num});
  }

  render () {
    const tweeter = 
      (<a href="twitter.com/intent/tweet" target="_blank">
        <i className='icon-twitter'></i>
      </a>);
  
    return (
      <div className="App">
        <div  id="quote-box">
          <QuotesText text={this.state.quote.quote} isHidden={this.state.isTextHidden} />
          <Author author={this.state.quote.author} isHidden={this.state.isTextHidden} />
          <div className="buttons">
            <Button id='tweet-quote' text={tweeter} />
            <Button id='new-quote' text='New Quote' onClick={this.takeQuotes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
