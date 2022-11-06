import React from 'react'

const Word = ({word , correctLetters}) => {
  
  console.log('correct letters : ',correctLetters);
  
  return (
    <div className="word" id='word'>
        {
          word.split('').map((letter,index)=>(
            <div className="letter" key={index}>
              {correctLetters.includes(letter) ? letter : ''}
            </div>
          ))
        }
    </div>
  )
}

export default Word