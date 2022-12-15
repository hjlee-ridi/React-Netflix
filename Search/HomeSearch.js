import React, { useEffect, useState} from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";
import { useQuery , QueryClient, QueryClientProvider } from "react-query";
import "./Search.css";
import axios from 'axios';

const queryClient = new QueryClient();


function HomeSearch() {
    
    const [movies, setMovie] = useState([]);
    const [query, setQuery] = useState(" ");


    const onChange = (e) => {
        setQuery(e.target.value)
    }

    // const fetchSearchAPI = async() => {
	// 	const json = await (
	// 		await fetch(
	// 			`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
	// 		)
	// 	).json();
	// 	setMovie(json)
	// };


   

//     const fetchSearchAPI = () => {
//         const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
//         fetchMovies(endpoint)
//         console.log(endpoint);
//     }


// const fetchMovies = (endpoint) => {
//     fetch(endpoint)
//         .then((response) => response.json())
//         .then(response => {
//             setMovie([...movies, ...response.results]);
//         });
// }


    // const { data } = useQuery(['index', query],  fetchSearchAPI, {
    //     enabled: !!query,
    //     staleTime: 6 * 10 * 1000,
    //     cacheTime: 6 * 10 * 1000
    // });



const fetchSearchAPI = () => {
    return axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);
  };


    
    const { data } = useQuery(['index', query],  fetchSearchAPI, {
        select: (data) => {
            const movieQuery = data.data.results.map((search) => search);
            return movieQuery;
        },
        enabled: !!query,
        staleTime: 6 * 10 * 1000,
        cacheTime: 6 * 10 * 1000
    });

    console.log(data);    
 
    

    return (
        <div className="containers">
            <div>
                <input type="text" value={query} onChange={onChange} minLength="1" placeholder='Title input' />
            </div>
            { data && data.map((movieQuery, index) => {
                return (
                    <React.Fragment key={index}>        
                    {movieQuery.poster_path && (
                          <Movie
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
    );
}

export default function Searchs() {
    return (
        <QueryClientProvider client={queryClient}>
            <HomeSearch />
        </QueryClientProvider>
    )
}
