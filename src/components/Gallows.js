import React from 'react'

const Gallows = ({wrongLetters}) => {

  console.log('wrong letters : ',wrongLetters);

  return (
    <svg height="250" width="200" className="figure-container">
        <line x1="60" y1="20" x2="140" y2="20"></line>
        <line x1="140" y1="20" x2="140" y2="50"></line>
        <line x1="60" y1="20" x2="60" y2="230"></line>
        <line x1="20" y1="230" x2="100" y2="230"></line>
        {wrongLetters.length > 0 ? <circle cx="140" cy="70" r="20" className="figure-part" style={{display:'block'}}></circle> : ''}
        {wrongLetters.length > 1 ?  <line x1="140" y1="90" x2="140" y2="150" className="figure-part" style={{display:'block'}}></line> : ''}
        {wrongLetters.length > 2 ?  <line x1="140" y1="120" x2="120" y2="100" className="figure-part" style={{display:'block'}}></line> : ''}
        {wrongLetters.length > 3 ?  <line x1="140" y1="120" x2="160" y2="100" className="figure-part" style={{display:'block'}}></line> : ''}
        {wrongLetters.length > 4 ?  <line x1="140" y1="150" x2="120" y2="180" className="figure-part" style={{display:'block'}}></line> : ''}
        {wrongLetters.length > 5 ?  <line x1="140" y1="150" x2="160" y2="180" className="figure-part" style={{display:'block'}}></line> : ''}
    </svg>
  )
}

export default Gallows