import React from 'react'
import quotes from '../json/quotes.json'

const QuoteFooter = ({indexQuote, changeQuote, color, changeColor}) => {
  return (
    <div className='quote-footer'>
      <h2 style={{color}} className='quote-author'>{quotes[indexQuote].author}</h2>
      <button style={{backgroundColor: color}} className='button' onClick={changeQuote}>&#62;</button>
    </div>
  )
}

export default QuoteFooter