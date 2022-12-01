import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../components/config";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import Loading from "../components/Loading";
import Upcoming from "../components/Upcoming";


function HomeUpcomingMovies(props) {
    const [UpcomingMovies, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const cardsettings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8
    };


    useEffect(() => {
        const endpoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setUpcoming([...UpcomingMovies, ...response.results]);
                
                setLoading(false);
            });
    }

    

    const navigateUpcomingMore = () => {
        navigate("/UpcomingMore");
    }


console.log(Upcoming);
    return (
        <div className="Upcoming">
            {loading ? (
            <div>
                <Loading />
            </div>) : (
            <div>
                <div className="container">
                <h3 className="Header">Upcoming Movies</h3>
                <button className="Morebtn" onClick={navigateUpcomingMore}>More</button>
            </div> 
            <Slider {...cardsettings} className="slider">
                {UpcomingMovies && UpcomingMovies.map((upcoming, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Upcoming
                                image={
                                    upcoming.poster_path
                                        ? `${IMAGE_BASE_URL}w500/${upcoming.poster_path}`
                                        : null
                                }
                                key={upcoming.id}
                                id={upcoming.id}
                            />
                        </React.Fragment>
                    );
                })}
            </Slider>
            </div>
            )}
        </div>
    );
}

export default HomeUpcomingMovies;