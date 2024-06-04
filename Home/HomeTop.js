import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import Movie from "../components/Movie";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Loading from "../components/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";


function HomeTop() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
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
        <div className="Home">
            <div className="container" >
            <div className="Header_container">
                <h3 className="Header">Today Top 20</h3>
            </div>
            <div className="Movies">
                <Slider {...settings} className="slider">
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
        </div>
    );
}

export default HomeTop;
