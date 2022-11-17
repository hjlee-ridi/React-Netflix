import React, { useState, useEffect, component } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import axios from "axios";
import { API_URL, API_KEY, IMAGE_BASE_URL, ACTION } from "./components/config";
import Action from "./components/Action";
import "slick-carousel/slick/slick.css";
import "./HomeAction.css";
import Loading from "./Loading";


function HomeDrama(props) {
    const [Actions, setAction] = useState([]);
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
        const endpoint = `${API_URL}${ACTION}&api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setAction([...Actions, ...response.results]);
                setLoadMorePage(response.page)
                setLoading(false);
            });
    }

    const loadMore = () => {

        const endpoint = `${API_URL}${ACTION}&api_key=${API_KEY}&language=en-US&page=${loadMorePage + 1}`;
        fetchMovies(endpoint)
    }

    const navigateDramaMore = () => {
        navigate("/ActionMore");
    }

console.log(Actions);
    return (
        <div className="action">
            {loading ? (
            <div>
                <Loading />
            </div>) : (
            <div>
                <div>
                <div className="container">
                <h3 className="actionHeader">Action</h3>
                <button className="Morebtn" onClick={navigateDramaMore}>More</button>
            </div> 
            <Slider {...cardsettings}>
                {Actions && Actions.map((action, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Action
                                image={
                                    action.poster_path
                                        ? `${IMAGE_BASE_URL}w500/${action.poster_path}`
                                        : null
                                }
                                key={action.id}
                                id={action.id}
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

export default HomeDrama;
