import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Loading from "../components/Loading";
import Carousel from 'react-bootstrap/Carousel';
import Banner from "../components/Banner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomeBanner(props) {
	const [movies, setMovies] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
	

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setError(null);
				setMovies(null);
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

	if (loading) return <div><Loading /></div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!movies) return null;


	return (
		<Container fluid>
			<Row>
				<Col>
				<Carousel activeIndex={index} onSelect={handleSelect}>
						{movies.results.map((banner, index) => {
							return (
								<Carousel.Item key={index}>
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
								</Carousel.Item>
								
							);
						})}
        			</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default HomeBanner;
