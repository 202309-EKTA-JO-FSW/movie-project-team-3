import Link from 'next/link'
import React from 'react'
import 'bootstrap/dist/js/bootstrap.esm';

export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
  },
 })
  const data = await res.json()
  return { props: { actors: data.results } }
}

function Actors({ actors }) {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>

        <h2>Actors</h2>

        <ul> 
          {actors.map((actor) => (
            
            <Link href={`/actors/${actor.id}`} key={actor.id} >
              <div style={{width:"290px", padding:"5px",  borderRadius:"10px", margin:"17px", backgroundColor:"rgb(200, 209, 216)"}}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                  style={{width:"259px", height:"250px", marginLeft:"10px", marginTop:"30px"}}
                  alt='Actor Picture'
                />
                  <p className="text">{actor.name}</p>
              </div>
            </Link>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Actors