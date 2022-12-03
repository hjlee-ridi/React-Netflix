import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";
import MovieInfo from '../components/MovieInfo';
import './Detail.css';

function UpcomingDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);
    const navigate = useNavigate();

	const getMovies = async() => {
		const json = await (
			await fetch(
				`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
			)
		).json();
		setMovie(json)
	};


	useEffect(()=> {
		getMovies();
	}, [])


    const navigateUpcomingMore = () => {
        navigate("/UpcomingMore");
    }

	return (
        <div>
		<div className="Detail">
			<React.Fragment>
			<Movie
			 image={
				movies.poster_path
					? `${IMAGE_BASE_URL}original/${movies.poster_path}`
					: null
			} />
			<MovieInfo
				movie={movies}
			/>
			</React.Fragment>
            </div>
            
            <div className="DetailBtn">
            <button className="Detailbutton" onClick={navigateUpcomingMore}>비슷한 영화</button>
            </div>
            
		</div>
	);
}

export default UpcomingDetail;
