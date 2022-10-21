import React from 'react'




const Movie = ({movie}) => {

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
          <span className='hidden'>{id}</span>
          {/* <span>{order}</span> */}
          <h3>{title}</h3>
        </div>

    </div>
  )
} 
export default Movie


// {/* <div>
                
//                 <span className="trick" >{id}</span>

//                 <button className="add-fav" title="add to favourites">
//                 <i className="fa-solid fa-heart"></i>
//                 </button>
//             </div> */}