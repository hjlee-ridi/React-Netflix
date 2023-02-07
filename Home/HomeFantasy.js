import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { API_URL, API_KEY, IMAGE_BASE_URL, FANTASY } from "../components/config";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import Loading from "../components/Loading";
import Movie from "../components/Movie";


function HomeFantasy(props) {
    const [fantasy, setFantasy] = useState([]);
    const [loadMorePage, setLoadMorePage] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const cardsettings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };




    useEffect(() => {
        const endpoint = `${API_URL}${FANTASY}&api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setFantasy([...fantasy, ...response.results]);
                setLoadMorePage(response.page)
                setLoading(false);
            });
    }


    const navigateFantasyMore = () => {
        navigate("/FantasyMore");
    }


    return (
        <div className="Home">
            {loading ? (
            <div>
                <Loading />
            </div>) : (
            <div>
                <div>
                <div className="container">
                <h3 className="Header">Fantasy</h3>
                <button className="Morebtn" onClick={navigateFantasyMore}>More</button>
            </div> 
            <Slider {...cardsettings} className="slider">
                {fantasy && fantasy.map((fantasy, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Movie
                                image={
                                    fantasy.poster_path
                                        ? `${IMAGE_BASE_URL}w500/${fantasy.poster_path}`
                                        : null
                                }
                                key={fantasy.id}
                                id={fantasy.id}
                            />
                        </React.Fragment>
                    );
                })}
            </Slider>
            </div>
            </div>
            )}
        </div>
    );
}

export default HomeFantasy;
