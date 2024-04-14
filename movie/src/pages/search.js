import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query; 
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=11312773653cb2985d532ab2235064d3&query=${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {searchResults.map((result) => (
          <div className="col" key={result.id}>
            <Link href={`/movies/${result.id}`}>
              <div className="card movie-card" style={{ height: '420px' }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  className="card-img-top"
                  alt="Movie Poster"
                  style={{ height: '330px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{result.title}</h5>
                </div>
              </div>
            </Link>
            <br/>
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
