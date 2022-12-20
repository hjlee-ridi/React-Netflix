import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Detail from "../components/Detail";

function BannerDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);
	const navigate = useNavigate();
	let genres = [];


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
						let genresList = {genres.map((genres, i) => {
							
							 {genres.name}
						})}
						date={movies.release_date}
						runtime={movies.runtime}
						star={movies.vote_average}
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
