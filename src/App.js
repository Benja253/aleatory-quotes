import { useState } from 'react';
import './App.css';
import QuoteBody from './components/QuoteBody';
import QuoteFooter from './components/QuoteFooter';
import quotes from './json/quotes.json'

function App() {

  //Change state to random quotes
  const getRandomQuote = () => Math.floor(Math.random() * quotes.length)
  const [indexQuote, setIndexQuote] = useState(getRandomQuote())
  const changeQuote = () => {
    setIndexQuote(getRandomQuote())
    changeColor()
  }
  
  //Change state to random color
  const colors = ['#A2A392', '#6E0D25', '#D7C9AA', '#774E24', '#DCAB6B', '#B58DB6', '#5D2E46', '#AD6A6C', '#2B4570', '#7180AC', '#86BBD8', '#24899D', '#C879FF', '#417B5A', '#C879FF', '#B8336A', '#37515F', '#251605', '#49111C', '#D84727', '#EF7B45', '#208AAE']
  const getRandomColor = () => Math.floor(Math.random() * colors.length)
  const [indexColor, setIndexColor] = useState(getRandomColor())
  const changeColor = () => setIndexColor(getRandomColor())

  document.body.style = `background-color: ${colors[indexColor]}`

  return (
    <div className="App">
      <QuoteBody indexQuote={indexQuote} color={colors[indexColor]} />
      <QuoteFooter indexQuote={indexQuote} changeQuote={changeQuote} color={colors[indexColor]} changeColor={changeColor}  />
    </div>
  );
}

export default App;
