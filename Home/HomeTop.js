import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import Movie from "../components/Movie";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Loading from "../components/Loading";
import "./Home.css";


function HomeTop() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const cardsettings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: false
                }
            }
        ]
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
        <div className="Top">
            <div className="container">
                <h3 className="Header">Today Top 20</h3>
            </div>
            <div className="Movies">
                <Slider {...cardsettings} className="slider">
                    {movies.results.map((movie, index) => {
                        return (
                            <div className="card-margin">
                            <React.Fragment key={index}>
                                <div>
                                <Movie
                                    image={
                                        movie.poster_path
                                            ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
                                            : null
                                    }
                                    key={movie.id}
                                    id={movie.id}
                                />
                                </div>
                            </React.Fragment>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default HomeTop;
