import { useRouter } from 'next/router'

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



function Actor({ idactors }) {
  console.log(idactors)
  const router = useRouter()
  
  return( 
  
  <div className="mx-auto max-w-7xl w-full p-6"> 
  <img src={`https://image.tmdb.org/t/p/w500/${idactors.profile_path}`}/>
  <h1>{idactors.name}</h1>
  <p>Birthday : {idactors.birthday}</p>
  <p>Gender: <GetGender gender={idactors.gender}/></p>
  <p>Biography: {idactors.biography}</p>
  <p>Popularity: {idactors.popularity}</p>
  </div>)
}

export default Actor



 
export const GetGender = ({gender}) => {
  if (gender == 1) {
     return "female";
  } else {
     return "male";
  }
 };