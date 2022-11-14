import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "./components/config";
import Movie from "./components/Movie";
import MovieInfo from "./MovieInfo";
import './Detail.css';

function Detail(props) {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);

	useEffect(() => {
		let endpoint = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
		fetch(endpoint)
			.then((response) => response.json())
			.then((response) => {
				setMovie(response);
			});
	}, []);

    console.log(movies);
	return (
		<div className="component">
			<Movie
			 image={
				movies.poster_path
					? `${IMAGE_BASE_URL}original/${movies.poster_path}`
					: null
			} />
			<MovieInfo
				movie={movies}
			/>
		</div>
	);
}

export default Detail;
