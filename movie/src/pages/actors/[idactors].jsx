import React, { useState, useEffect } from "react";
import Link from 'next/link';


function Actor({ idactors }) {
  console.log(idactors)
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        if (!idactors) return; 
        const res = await fetch(
          `https://api.themoviedb.org/3/person/${idactors.id}/movie_credits?api_key=11312773653cb2985d532ab2235064d3`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch movie credits");
        }
        const data = await res.json();
        setMovieCredits(data.cast);
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    fetchMovieCredits();
  }, [idactors]); 

  if (!idactors) {
    return <div>Loading...</div>; 
  }


  return( 
     <div>
    <div class="card mb-3" style={{maxwidth: "340px"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={`https://image.tmdb.org/t/p/w500/${idactors.profile_path}`} class="img-fluid rounded-start" alt="Actor Picture"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h1 class="card-title">{idactors.name}</h1>
          <br></br>
          <p class="card-text"><strong>Birthday: </strong>{idactors.birthday}</p>
          <p class="card-text"><strong>Gender: </strong>  <GetGender gender={idactors.gender}/></p>
          <p class="card-text"><strong>Biography: </strong> {idactors.biography}</p>
          <p class="card-text"><strong>Popularity: </strong>{idactors.popularity}</p>
        </div>
      </div>
    </div>
  </div>
  <h3>Movie Credits:</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movieCredits.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <div className="card movie-card" style={{ flex: "0 0 25%", margin: "0 20px 20px 0", textAlign: "center" }}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?width=172&amp;height=172`} className="card-img-top" alt="Movie Poster" style={{ height: "200px", width: "auto" }} />
              <div className="card-body" style={{ padding: "10px" }}>
                <p className="card-title" style={{ height: "100px", width: "200px" }}>{movie.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
  </div>
  )
}

export default Actor


 
export const GetGender = ({gender}) => {
  if (gender == 1) {
     return "female";
  } else {
     return "male";
  }
 };

export async function getStaticPaths() {
  const res = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
  },
 })
  const data = await res.json()

  const paths = data.results.map((idactors) => ({
    params: { idactors: idactors.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log(params.idactors)
  const res = await fetch(`https://api.themoviedb.org/3/person/${params.idactors}?language=en-US`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
  },
 })
  const idactors = await res.json()

  return { props: { idactors } }
}


