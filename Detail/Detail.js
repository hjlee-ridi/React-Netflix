import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Detail from "../components/Detail";
import Movie from "../components/Movie";

function BannerDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState(" ");
	const [loadMorePage, setLoadMorePage] = useState(0);
	const navigate = useNavigate();



	const getMovies = async () => {
		const json = await (
			await fetch(
				`${API_URL}movie/${movieId}?api_key=${API_KEY}`
			)
		).json();
		setMovie(json)
	};

	useEffect(() => {
		getMovies();
	}, [])


	// const navigateDramaMore = () => {
	// 	navigate("/DramaMore");
	// }



	return (
		<div>
			<div className="Detail">
				<React.Fragment>
					<Detail
						backdrop_path={
							movies.backdrop_path
								? `${IMAGE_BASE_URL}original/${movies.backdrop_path}`
								: null
						}
						title={movies.original_title}
						poster_path={
							movies.poster_path
								? `${IMAGE_BASE_URL}w500/${movies.poster_path}`
								: null
						}
						overview={movies.overview}
						genres={movies.genres}
						release_date={movies.release_date}
						runtime={movies.runtime}
						vote_average={movies.vote_average}
						key={movies.id}
						id={movies.id}
					/>
					
				</React.Fragment>
			</div>
		</div>
	);
}


export default BannerDetail;
