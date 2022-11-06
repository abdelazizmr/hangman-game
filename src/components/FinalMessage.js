import React from 'react'
import { useEffect } from 'react';

const FinalMessage = ({word,correctLetters,wrongLetters,setPlayable,playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, word) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, word) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${word}`;
    playable = false;
  }

  //* checking the win function because there is no other way lol
  function checkWin(correct, wrong, word) {
      let status = 'win';

      // Check for win
      word.split('').forEach(letter => {
        if(!correct.includes(letter)){
          status = '';
        }
      });
      
      // Check for lose
      if(wrong.length === 6) status = 'lose';

      return status
}

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default FinalMessage