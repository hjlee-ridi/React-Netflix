import React, { useState} from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";
import { useQuery , QueryClient, QueryClientProvider } from "react-query";
import "./Search.css";

const queryClient = new QueryClient();


function HomeSearch() {
    
    const [movies, setMovie] = useState([]);
    const [query, setQuery] = useState(" ");


    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchSearchAPI = async() => {
		const json = await (
			await fetch(
				`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
			)
		).json();
		setMovie(json)
	};



    const { data:  results } = useQuery(['index', query],  fetchSearchAPI, {
        enabled: !!query,
        staleTime: 6 * 10 * 1000,
        cacheTime: 6 * 10 * 1000
    });


    console.log(movies);
    console.log(query);

    return (
        <div className="containers">
            <div>
                <input type="text" value={query} onChange={onChange} minLength="1" placeholder='Title input' />
                <input type="submit" value="확인"/>
            </div>
            { results &&  results.map((search, index) => {
                return (
                    <React.Fragment key={index}>        
                    {search.poster_path && (
                          <Movie
                             image={
                                 search.poster_path
                                     ? `${IMAGE_BASE_URL}w500/${search.poster_path}`
                                     : null
                             }
                             key={search.id}
                             id={search.id}
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
