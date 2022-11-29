import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { API_URL, API_KEY, IMAGE_BASE_URL, FANTASY } from "../components/config";
import Fantasy from "../components/Fantasy";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import Loading from "../components/Loading";


function HomeFantasy(props) {
    const [fantasy, setFantasy] = useState([]);
    const [loadMorePage, setLoadMorePage] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
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

    const loadMore = () => {

        const endpoint = `${API_URL}${FANTASY}&api_key=${API_KEY}&language=en-US&page=${loadMorePage + 1}`;
        fetchMovies(endpoint)
    }

    const navigateDramaMore = () => {
        navigate("/FantasyMore");
    }

console.log(fantasy);
    return (
        <div className="fantasy">
            {loading ? (
            <div>
                <Loading />
            </div>) : (
            <div>
                <div>
                <div className="container">
                <h3 className="Header">Fantasy</h3>
                <button className="Morebtn" onClick={navigateDramaMore}>More</button>
            </div> 
            <Slider {...cardsettings}>
                {fantasy && fantasy.map((fantasy, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Fantasy
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
