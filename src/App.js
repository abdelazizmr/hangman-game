import React from 'react'
import Header from './components/Header'
import Gallows from './components/Gallows'
import WrongLetter from './components/WrongLetter'
import Word from './components/Word'
import FinalMessage from './components/FinalMessage'
import Notification from './components/Notification'
import { useState , useEffect } from 'react'
import './App.css'

//* Generate a random word
const words = ['css','react','javascript','html','python','laravel','php','mysql']

let word = words[Math.floor(Math.random() * words.length)]



const App = () => {
  const [playable, setplayable] = useState(true)
  const [correctLetters , setcorrectLetters] = useState([])
  const [wrongLetters , setwrongLetters] = useState([])
  const [notif , setnotif]  = useState(false)

  //* this function for the repition notif it sets true and false after 1s
  const show = (setter)=>{
    setter(true)
    setTimeout(()=>{
      setter(false)
    },1500)
  }

  //* this will render when correct or wrong or playable states change
  useEffect(()=>{
  //* Entering a guess
  const handlePress = (e)=>{
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      let letter = e.key.toLowerCase()
      console.log(letter);
      let arr = word.split('')
    
    if (playable){
      if (arr.includes(letter)){
            if (!correctLetters.includes(letter)){
              setcorrectLetters(currentletters=>[...currentletters,letter])
            }else{
              show(setnotif)
            }
      }else{
            if (!wrongLetters.includes(letter)){
              setwrongLetters(currentletters=>[...currentletters,letter])
            }else{
              show(setnotif)
            }
      }
    }

    }
}


  window.addEventListener("keydown",handlePress);

  return () => window.removeEventListener('keydown', handlePress);
  
},[correctLetters,wrongLetters,playable,notif])


//*playing again and reseting
const playAgain = ()=>{
  setplayable(true)
  setcorrectLetters([])
  setwrongLetters([])
  word = words[Math.floor(Math.random() * words.length)]
}


  
  


  return (
    <>
      <Header/>

      <div className='game-container'>
          
        <Gallows wrongLetters={wrongLetters}/>

        <WrongLetter wrongLetters={wrongLetters} />

      </div>
      
      <Word word={word} correctLetters={correctLetters}/>

      <FinalMessage correctLetters={correctLetters} wrongLetters={wrongLetters} word={word} setPlayable={setplayable} playAgain={playAgain} />
      
      <Notification shownotification={notif} />
    </>
  )
}

export default App





