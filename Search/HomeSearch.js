import React, { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";
import { useSearchParams } from 'react-router-dom';



function HomeSearch() {
    const [searchs, setSearchs] = useState([]);
    // const [movie_title, setMovie_title] = useState(" ");
    const [query, setQuery] = useSearchParams();


    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const getAPIUrl = useCallback(() => {
        return  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
    }, [query]);

    useEffect(() => {
        const endpoint = getAPIUrl();
        fetchMovies(endpoint)
        console.log(endpoint);
    }, [getAPIUrl])



    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setSearchs([...searchs, ...response.results]);
            });
    }

    console.log(searchs);
    console.log(query);

    


//   const [searchs, setSearch] = useState([]);
//   const [query, setQuery] = useSearchParams();

//   const onChange = (e) => {
//     setQuery(e.target.value)
// }

//   const getProducts = async() => {
//     let searchQuery = query.get('q') || "";
//     console.log("쿼리무슨쿼리?", searchQuery)
//     let endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}`;  //동적으로 바뀌는 정보 ${ }
//     fetchMovies(endpoint)
//   }

//   const fetchMovies = (endpoint) => {
//     fetch(endpoint)
//         .then((response) => response.json())
//         .then(response => {
//             setSearch([...searchs, ...response.results]);
//         });
// }
  
//   useEffect(()=>{
//       getProducts()
//     }, [query])




    return (
        <div className="containers">
            <div>
                <input type="text" value={query} onChange={onChange} minLength="1" placeholder='Title input' style={{ color: "white" }} />
                <input type="submit" value="확인"/>
            </div>
            {searchs && searchs.map((search, index) => {
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

export default HomeSearch;

