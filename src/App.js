import React from 'react';
import Quotes from './Fetch.js';
import Author from './Author/Author';
import QuotesText from './QuotesText/QuotesText';
import Button from './Buttons/Button';
import Link from './Buttons/Link';

import './App.css';
import './fontello/css/fontello.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      quotes: [],
      currNum: 0,
      backgroundColor: ['#dbc08a', '#c9a14f', '#c3963c', '#d6b676', '#cca353', '#c4963b'],
      textColor: ['#433d3d', '#6b6161', '#867979', '#786d6d', '#5e5555', '#363030'],
      nr: 1,
      isTextHidden: false
    };

    this.takeQuotes = this.takeQuotes.bind(this);
    this.changeBg = this.changeBg.bind(this);
  }
  
  componentDidMount() {
    Quotes.take()
    .then( quote => {
      this.setState({ quotes: quote });
    })
    this.setState(prevState => {
      return {currNum: prevState.currNum + 1}
   });
  }

  takeQuotes() {
    this.changeBg();
    this.setState(prevState => {
      return {currNum: prevState.currNum + 1}
   });
    if(this.state.currNum===19) {
      Quotes.take()
      .then( quote => {
        this.setState({ quotes: quote });
      })
    this.setState({ currNum:0 });
    }
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
    const tweeter = <i className='icon-twitter'></i>;
    return (
      <div className="App">
        <div  id="quote-box">
          {this.state.quotes.length > 0 ? <QuotesText text={this.state.quotes[this.state.currNum].quote} 
                      isHidden={this.state.isTextHidden} /> : '...loading'}
          {this.state.quotes.length > 0 && <Author author={this.state.quotes[this.state.currNum].author} 
          isHidden={this.state.isTextHidden} /> }
          <div className="buttons">
            <Link id='tweet-quote' text={tweeter} link='twitter.com/intent/tweet' />
            <Button id='new-quote' text='New Quote' onClick={this.takeQuotes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
