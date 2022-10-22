import React from 'react'
import './App.css';
import { useEffect , useState } from 'react';
import searchIcon from './search.svg'
import Movie from './Movie.js';

//!omdb api
//d5cf1839
//http://www.omdbapi.com?apikey=d5cf1839&s=spiderman
//!imdb api
//https://imdb-api.com/en/API/Top250Movies/k_pp0slmxz




const App = () => {

    const [movies , setMovies] = useState([]);
    const [input , setInput] = useState('');

    

  const getMovies = async(title)=>{
      //!fetching from imdb api using title and not
      const response = await fetch(`${title ? `https://imdb-api.com/API/Search/k_pp0slmxz/${title}` : 'https://imdb-api.com/en/API/Top250Movies/k_pp0slmxz' }`);

      //!fetching from omdb api using title
      //const response = await fetch(`http://www.omdbapi.com?apikey=d5cf1839&s=${title}`)

      //!=>data.results for movies with title
      //!=>data.items for top 250 movies

      if (title == null){
        const data = await response.json();

        console.log(data.items)
      
        setMovies(data.items)

      }else if (title !== null){
        const data = await response.json();

        console.log(data.results)
      
        setMovies(data.results)
      }


      
      
  }

    //! displaying 250 top imdb movies when page loads

    useEffect(()=>{
      //getMovies(null);
    },[])
  
    

  
    return (
      <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
          <input type="text" placeholder='search a movie'
        value={input} onChange={(e)=>setInput(e.target.value)} /> 
        <img src={searchIcon} alt="search" onClick={()=> getMovies(input)}/>
        </div>

        <div className='container'>
          {
          movies?.length > 0 ?(
            movies.map((movie,index)=>(
            <Movie movie={movie} order={index+1} key={index} />
            ))
          ): (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
        }
        </div>


      </div>
    )
}

export default App
