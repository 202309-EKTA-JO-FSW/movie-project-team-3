import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Movie = () => {
  const router = useRouter();

  const { idmovies } = router.query;

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!idmovies) return; 
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${idmovies}?language=en-US&api_key=11312773653cb2985d532ab2235064d3`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
  
    fetchMovieData();
  }, [idmovies]);
  
  if (!movieData) {
    return <div>Loading...</div>;
  }

  return ( 
    <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} class="img-fluid rounded-start" alt="Actor Picture" style={{width:' 100%',height:' 100%'}} />
      </div>
      <div class="col-md-8">
        <div class="card-body" style={{marginTop: "7%", marginBottom: "7%"}}>
          <br/>
          <h1 class="card-title" style={{ fontWeight: 'bold', fontSize: '40px' }}>{movieData.title}</h1>
          <br></br>
          <p className="card-text" style={{ fontWeight: 'bold', fontSize: '18px' }}><strong>Release date: </strong>{movieData.release_date}</p>
            <p className="card-text" style={{ fontWeight: 'bold', fontSize: '18px'  }}><strong>Runtime: </strong>   {movieData.runtime} minutes</p>
            <p className="card-text" style={{ fontWeight: 'bold', fontSize: '18px'  }}><strong>Language: </strong> English</p>
          <p class="card-text" style={{ fontWeight: 'bold', fontSize: '18px'  }}><strong>Overview: </strong></p>
          <p style={{ fontSize: '18px'  }}>{movieData.overview}</p>
          <br/>
          <br/>
          <div style={{ cursor: 'default', maxWidth: '130px', maxHeight: '130px', fontWeight: 'bold', marginLeft:'80%', marginTop:'2%'}}>
              <CircularProgressbar
                value={movieData.vote_average * 10}
                text={`${movieData.vote_average}`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: 'rgba(99, 81, 206, 1)',
                  pathTransitionDuration: 0.5,
                  trailColor: '#d6d6d6', 
                  backgroundColor: '#3e98c7',
                  strokeLinecap: 'butt',  
                })}
              />
            </div>
        </div>
      </div>
    </div>
  </div> 
);
};

export default Movie;