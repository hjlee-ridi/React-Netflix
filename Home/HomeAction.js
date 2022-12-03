import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { API_URL, API_KEY, IMAGE_BASE_URL, ACTION } from "../components/config";
import Action from "../components/Action";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import Loading from "../components/Loading";


function HomeAction(props) {
    const [Actions, setAction] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const cardsettings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    infinite: true,
                    dots: false
                }
            }
        ]
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
                setLoading(false);
            });
    }

    const navigateActionMore = () => {
        navigate("/ActionMore");
    }


    
    return (
        <div className="action">
            {loading ? (
            <div>
                <Loading />
            </div>) : (
            <div>
                <div>
                <div className="container">
                <h3 className="Header">Action</h3>
                <button className="Morebtn" onClick={navigateActionMore}>More</button>
            </div> 
            <Slider {...cardsettings} className="slider">
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

export default HomeAction;
