import { useRouter } from "next/router"

function idactors() {
const router = useRouter();
  console.log(router.query)
  return (
    <div>
     <h1>jll</h1>
    </div>
  )
}

export default idactors


// export async function getServerSideProps(context){
//   const res = await fetch (`https://api.themoviedb.org/3/person/${context.params.id}?language=en-US`)
//   const data = await res.json();

//   return{
//     props:{
//       actor:data
//     }
//   }
// }