import React, { useState, useEffect} from "react";
import { useParams , useNavigate } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL, FANTASY} from "../components/config";
import MovieInfo from '../components/MovieInfo';
import Fantasy from '../components/Fantasy';
import FantasyMore from '../More/FantasyMore';
import './Detail.css';


function FantasyDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);
	const navigate = useNavigate();

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
	
    const navigateFantasyMore = () => {
        navigate("/FantasyMore");
    }

	return (
		<div>
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

			<div className="DetailBtn">
            <button className="Detailbutton" onClick={navigateFantasyMore}>비슷한 영화</button>
            </div>

		</div>
	);
}

export default FantasyDetail;