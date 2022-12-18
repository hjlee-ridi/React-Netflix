import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
// import Movie from "../components/Movie";
// import MovieInfo from '../components/MovieInfo';
// import './Detail.css';
import Detail from "../components/Detail";
import Movie from "../components/Movie";

function BannerDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);
	const navigate = useNavigate();


	const getMovies = async () => {
		const json = await (
			await fetch(
				`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
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


	console.log(movies);
	return (
		<div>
			<div className="Detail">
				<React.Fragment>
					<Detail
						image={
							movies.backdrop_path
								? `${IMAGE_BASE_URL}original/${movies.backdrop_path}`
								: null
						}
						title={movies.original_title}
						date={movies.release_date}
						runtime={movies.runtime}
						star={movies.vote_average}
						overview={movies.overview}
					/>
					<Movie
						image={
							movies.poster_path
								? `${IMAGE_BASE_URL}w500/${movies.poster_path}`
								: null
						}
						key={movies.id}
						id={movies.id}
					/>
				</React.Fragment>
			</div>

			{/* <div className="DetailBtn">
				<button className="Detailbutton" onClick={navigateDramaMore}>비슷한 영화</button>
			</div> */}
		</div>
	);
}


export default BannerDetail;
