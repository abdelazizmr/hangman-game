import React from 'react'




const Movie = ({movie , order}) => {


  //imdbApi
  const {title , image , imDbRating , id } = movie

  return (
    <div className='movie'>

      <div>
        <p>{imDbRating}</p>
      </div>

        <div>
            <img src={image} alt={title} />
        </div> 

        <div>
          {/* <span className='hidden'>{id}</span> */}
          <h3>{order} - </h3>
          <h3>{title}</h3>
        </div>

    </div>
  )

  //!omdbapi

  // const {Poster, Title , Type , Year , imdbID} = movie

  // return (
  //   <div className='movie'>

  //     <div>
  //       <p>{Year}</p>
  //     </div>

  //       <div>
  //           <img src={Poster} alt={Title} />
  //       </div> 

  //       <div>
  //         <span className='hidden'>{imdbID}</span>
  //         <span>{Type}</span>
  //         <h3>{Title}</h3>
  //       </div>

  //   </div>
  //)
} 
export default Movie


// {/* <div>
                
//                 <span className="trick" >{id}</span>

//                 <button className="add-fav" title="add to favourites">
//                 <i className="fa-solid fa-heart"></i>
//                 </button>
//             </div> */}