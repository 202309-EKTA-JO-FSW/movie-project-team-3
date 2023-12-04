const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const getTrendingMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=11312773653cb2985d532ab2235064d3');
    const data = await res.json();
    return data.results
}


export const getMoviesDetails = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=11312773653cb2985d532ab2235064d3`);
    const data = await res.json
    return data.results
}
