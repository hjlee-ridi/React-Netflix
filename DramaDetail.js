import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL, DRAMA} from "./components/config";
import MovieInfo from "./MovieInfo";
import Drama from "./components/Drama";
import './TopDetail.css';


function DramaDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);

	const getMovies = async() => {
		const json = await (
			await fetch(
				`${API_URL}/movie/${movieId}?${DRAMA}&api_key=${API_KEY}&language=en-US`
			)
		).json();
		setMovie(json)
	};
	useEffect(()=> {
		getMovies();
	}, [])

    console.log(movies);
	return (
		<div className="component">
			<React.Fragment>
			<Drama
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

export default DramaDetail;