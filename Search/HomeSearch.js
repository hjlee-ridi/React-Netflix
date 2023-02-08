import React, { useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";
import Search from "../components/Search";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import "./Search.css";
import axios from 'axios';

const queryClient = new QueryClient();


function HomeSearch() {

    const [query, setQuery] = useState(" ");


    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchSearchAPI = () => {
        return axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);
    };

    const { data } = useQuery(['index', query], fetchSearchAPI, {
        select: (data) => {
            const movieQuery = data.data.results.map((search) => search);
            return movieQuery;
        },
        enabled: !!query,
        staleTime: 6 * 10 * 1000,
        cacheTime: 6 * 10 * 1000
    });


    const inputReset = () => {
        setQuery(" ")
    }


    return (
        <div className="search">
            <div className="input">
                <input type="text" value={query} onChange={onChange} minLength="1" placeholder='Search...' className="inputbox" />
                <button className="inputReset" onClick={inputReset}>X</button>
            </div>
            <div className="Movie">
                {data && data.map((movieQuery, index) => {
                    return (
                        <React.Fragment key={index}>
                            {movieQuery.poster_path && (
                                <Search
                                    image={
                                        movieQuery.poster_path
                                            ? `${IMAGE_BASE_URL}w500/${movieQuery.poster_path}`
                                            : null
                                    }
                                    key={movieQuery.id}
                                    id={movieQuery.id}
                                />
                            )

                            }

                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default function Searchs() {
    return (
        <QueryClientProvider client={queryClient}>
            <HomeSearch />
        </QueryClientProvider>
    )
}
