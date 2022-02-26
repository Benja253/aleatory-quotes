import React from 'react'
import quotes from '../json/quotes.json'


const QuoteBody = ({indexQuote, color}) => {
  
  return (
    <div className='quote-body'>
      <i style={{color}} className="fa-solid fa-quote-left"></i>
      <p style={{color}} className='quote'>{quotes[indexQuote].quote}</p>
    </div>
  )
}

export default QuoteBody