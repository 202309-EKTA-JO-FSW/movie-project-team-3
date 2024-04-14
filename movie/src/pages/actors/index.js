import Link from 'next/link'
import React from 'react'

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
    <div style={{ paddingLeft: '7%', paddingRight: '7%' }}>
      <br/>
      <br/>
      <br/>
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
    {actors.map((actor) => (
            
            <Link href={`/actors/${actor.id}`} key={actor.id} >
                <div className="card movie-card" style={{ height: "420px" }}> 
                  <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}?width=172&amp;height=172`} class="card-img-top" alt="Actor Picture" style={{ height: "330px", objectFit: "cover" }}/>
                  <div class="card-body">
                    <h5>{actor.name}</h5>
                  </div>
                </div>
            </Link>
          ))}
        </div>
        <br/>
        <br/>
        <br/>
        </div>
  )
}

export default Actors