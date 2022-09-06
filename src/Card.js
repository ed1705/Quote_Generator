import React, { Component } from "react";
import "./Card.css";
import quotes  from "./QuoteDatabase"
import useGenerateRandomColor 
    from "./useGenerateRandomColor";

class Card extends Component {
    constructor() {
      super();
      this.state = { quote: quotes[0].quote,
       author: quotes[0].author,}
    }
  
  getRandomQuoteqs() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
        // changeQuoteAtClick()
    }
    
    changeQuoteAtClick = (quotes) => {
        const NewQuote = this.getRandomQuoteqs();
        this.setState({
            quote:NewQuote.quote, 
            author:NewQuote.author})
    
    }

      componentDidMount() {
        let background = "#" + ((1<<24)*Math.random() | 0).toString(16);
        const html = document.documentElement;
        html.style.backgroundColor = background;
        console.log(background)
       return background
      }


    render() {
        // const randomColor = this.changeBackground();
        // const html = document.documentElement;
        // html.style.backgroundColor = randomColor;
        // console.log(randomColor)
  
      return (
        <div className="quotearea" id="area">
          <h1 id="author" style={{ color: this.componentDidMount() }}>{this.state.quote}</h1>
          <h4 style={{ color: this.componentDidMount() }}>{this.state.author}</h4>
          <button style={{ backgroundColor: this.componentDidMount() }} className="button" onClick={this.changeQuoteAtClick}{...this.state}>New Quote</button>
        </div>
        
      );
    }
  }
  
  export default Card
  