import React, { useState, useEffect, component} from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Slider from "react-slick";
import axios from "axios";
import Movie from "./components/Movie";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "./components/config";
import Banner from "./components/Banner";
import "./HomeTop.css";
import "slick-carousel/slick/slick.css";





function HomeTop(props) {
	const [movies, setMovies] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		cssEase: "linear",
		pauseOnHover: true
	  };	
	  const cardsettings = {
		dots: false,
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 8
	  };
	

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				// 요청이 시작 할 때에는 error 와 movies 를 초기화하고
				setError(null);
				setMovies(null);
				// loading 상태를 true 로 바꿉니다.
				setLoading(true);
				const response = await axios.get(
					`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
				);
				setMovies(response.data);
			} catch (e) {
				setError(e);
			}
			setLoading(false);
		};

		fetchUsers();
	}, []);

	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!movies) return null;



	return (
		
		<div>
			<div className="Banner">
				<Slider {...settings}>
					{movies.results.map((banner) => {
						return (
							<Banner
								image={
									banner.backdrop_path
										? `${IMAGE_BASE_URL}original/${banner.backdrop_path}`
										: null
								}
								key={banner.id}
								id={banner.id}
								title={banner.title}
							/>
						);
					})}
				</Slider>
			</div>

			
			<div className="gripcard">
			<h3 className="todayTop">Today Top 20</h3>
			<Slider {...cardsettings}>
				{movies.results.map((movie, index) => {
					return (
						<React.Fragment key={index}>
							
						<Movie
							image={
								movie.poster_path
								? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
								: null
							}
							key={movie.id}
							id={movie.id}
						/>
						</React.Fragment>
					);
				})}		
				</Slider>
			</div>

		</div>
	);
}

export default HomeTop;
