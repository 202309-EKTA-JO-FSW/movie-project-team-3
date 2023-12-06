import Link from 'next/link'
import React from 'react'

export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
  },
 })
  const data = await res.json()
  return { props: { movies: data.results } }
}

function Movies({ movies }) {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <br></br>
        <br></br>
        <ul className="row row-cols-1 row-cols-md-4 g-4"> 
          {movies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} >
                <div className="card" style={{width: "18rem", display:"flex"}}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt="Actor Picture" style={{height:"330px"}}/>
                  <div className="card-body">
                    <h5>{movie.title}</h5>
                  </div>
                </div>
            </Link>
          ))}
        </ul>
        <br></br>
      </div>
    </div>
  )
}

export default Movies



