import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";
import MovieInfo from '../components/MovieInfo';
import './Detail.css';

function BannerDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);

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


	return (
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
	);
}

export default BannerDetail;
