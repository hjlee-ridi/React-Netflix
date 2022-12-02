import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL, FANTASY} from "../components/config";
import MovieInfo from '../components/MovieInfo';
import Fantasy from '../components/Fantasy';
import './Detail.css';


function FantasyDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);

	const getMovies = async() => {
		const json = await (
			await fetch(
				`${API_URL}/movie/${movieId}?${FANTASY}&api_key=${API_KEY}&language=en-US`
			)
		).json();
		setMovie(json)
	};
	useEffect(()=> {
		getMovies();
	}, [])
	
	return (
		<div className="Detail">
			<React.Fragment>
			<Fantasy
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
	);
}

export default FantasyDetail;