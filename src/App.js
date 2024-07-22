import {useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';

const api_url = 'https://www.omdbapi.com/?apikey=e7a66a56';

const App = ()=>{
  const[Movies,SetMovies] = useState([])
  const[searchvalue, Setsearchvalue] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    SetMovies(data.Search)
  }
  useEffect(() =>{
    searchMovies('all');
  },[])
  return (
    <div className='app'>
      <h1 className='logo'>MovieApp</h1>
      <div className='search'>
        <input type='text' className='Search' placeholder='Enter the Movie Name' onChange={(e)=>Setsearchvalue(e.target.value)} value = {searchvalue}></input>
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg" alt="search" onClick={() => searchMovies(searchvalue)}></img>
      </div>
      {
        Movies.length>0
        ?
        (
        <div className='container'>
        {
          Movies.map((movie) =>(
            <MovieCard movie={movie}/>
          ))}
      </div>
      )
        :(
          <div className='empty'>
            <h2> No Movies Found ! </h2>
          </div>

        )
      
      }
    </div>
  );
}

export default App;
