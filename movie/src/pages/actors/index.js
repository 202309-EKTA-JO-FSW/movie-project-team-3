"use client"
import {useEffect, useState} from 'react'
import Link from 'next/link'
 function Actors() {
 
    const [ActorsList, setActorsList] = useState([])
    const getActors = () => {fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTMxMjc3MzY1M2NiMjk4NWQ1MzJhYjIyMzUwNjRkMyIsInN1YiI6IjY1NjRiZTI3MzY3OWExMDk3NGRhYjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W2PaRJ944VdGzYepbksyswnu7vaRO6CProCllZ4OoPw'
    },
   })
       .then(res => res.json())
       .then(json => setActorsList(json.results))
    }
      
      useEffect(() => {getActors()}, [])

      console.log(ActorsList);

      const Actorsjsx = ActorsList.map((Actor) => {
        return (
          <Link  href={`/actors/${Actor.id}`} key={Actor.id} >
          <div style={{width:"290px", padding:"5px",  borderRadius:"10px", margin:"17px", backgroundColor:"rgb(200, 209, 216)"}}>
           <img  style={{width:"259px", height:"250px", marginLeft:"10px", marginTop:"30px"}}src={`https://image.tmdb.org/t/p/w500${Actor.profile_path}`}/>
           <p className="text">{Actor.name}</p>
          </div>
          </Link>
        )
      })
    return (
      <div className="Actors-List">
        {Actorsjsx}
      </div>)
}  

export default Actors;

