import { useEffect, useState } from 'react';
import Link from 'next/link';

function TopRated() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
            },
        })
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    }, []);

    const renderStars = (rating) => {
        const starCount = Math.floor(rating / 2);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < starCount) {
                stars.push(<i key={i} className="fas fa-star text-warning"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star text-warning"></i>);
            }
        }
        return stars;
    };

    const Moviesjsx = movieList.map((movie) => {
        return (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
                <div className="card movie-card" style={{ height: "420px" }}> 
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?width=172&amp;height=172`} className="card-img-top" alt="Actor Picture" style={{ height: "330px", objectFit: "cover" }} /> 
                    <div className="card-body">
                        <h5>{movie.title}</h5>
                        <div>{renderStars(movie.vote_average)}</div>
                    </div>
                </div>
            </Link>
        );
    });
  
    return (
        <div style={{ paddingLeft: '7%', paddingRight: '7%' }}>
            <br/>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {Moviesjsx}
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default TopRated;
