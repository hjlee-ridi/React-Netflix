import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL, DRAMA} from "../components/config";
import MovieInfo from '../components/MovieInfo';
import Drama from "../components/Drama";
import './Detail.css';


function DramaDetail(props) {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);
	const [dramas, setDramas] = useState([]);

	const getMovies = async() => {
		const json = await (
			await fetch(
				`${API_URL}movie/${movieId}?api_key=${API_KEY}`
			)
		).json();
		setMovie(json)
	};

	const getDramas = async() => {
		const json = await (
			await fetch(
				`${API_URL}${DRAMA}&api_key=${API_KEY}&language=en-US`
			)
		).json();
		setDramas(json.results)
	};


	useEffect(()=> {
		getMovies();
	}, [])

	useEffect(()=> {
		getDramas();
	}, [])
	
    console.log(movies);
	return (
		<div>
			<div  className="Detail">
					<React.Fragment>
					<Drama
					 image={
						movies.poster_path
							? `${IMAGE_BASE_URL}original/${movies.poster_path}`
							: null
					}
					 />
					<MovieInfo
						movie={movies}
					/>
					</React.Fragment>	
				)
			
			</div>

			<h2>비슷한 영화</h2>
			<div  className="components">
			<Link to={`/Netflix/${props.id}`}>
			{dramas && dramas.map((drama, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Drama
                                image={
                                    drama.poster_path
                                        ? `${IMAGE_BASE_URL}w500/${drama.poster_path}`
                                        : null
                                }
                                key={drama.id}
                                id={drama.id}
                            />
                        </React.Fragment>
                    );
                })}
				</Link>
		</div>
		</div>
	);
}

export default DramaDetail;