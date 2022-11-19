import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL, DRAMA} from "./components/config";
import MovieInfo from "./MovieInfo";
import Drama from "./components/Drama";
import './TopDetail.css';


function DramaDetail() {
	const { movieId } = useParams();
	const [movies, setMovie] = useState([]);
	const [dramas, setDramas] = useState([]);

	const getMovies = async() => {
		const json = await (
			await fetch(
				`${API_URL}/movie/${movieId}?${DRAMA}&api_key=${API_KEY}&language=en-US`
			)
		).json();
		setMovie(json)
	};

	const getDramas = async() => {
		const jsons = await (
			await fetch(
				`${API_URL}${DRAMA}&api_key=${API_KEY}&language=en-US`
			)
		).json();
		setDramas(jsons)
	};


	useEffect(()=> {
		getMovies();
	}, [])

	useEffect(()=> {
		getDramas();
	}, [])
	
    console.log(dramas);
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
			<h3 style={{color: 'white'}}>비슷한 영화</h3>
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
		
		</div>
	);
}

export default DramaDetail;