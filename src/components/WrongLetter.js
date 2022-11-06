import React from 'react'

const WrongLetter = ({wrongLetters}) => {
  return (
    <div className='wrong-letters-container'>
        <div className="wrong-letters">
            {wrongLetters.map((letter,index)=>(
              <span key={index}>{wrongLetters.length === index -1 ? letter : `${letter}, ` }</span>
            ))}
        </div>
    </div>

  )
}

export default WrongLetter