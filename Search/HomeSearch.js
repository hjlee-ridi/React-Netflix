import React, { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";
import { useQuery } from "react-query";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';






function HomeSearch() {
    const [searchs, setSearchs] = useState([]);
    const [query, setQuery] = useSearchParams();


    const onChange = (e) => {
        setQuery(e.target.value)
    }


    const fetchSearchAPI = (Search) => {
        return axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);
      };

    const { data } = useQuery(['query', query ], fetchSearchAPI);



    // useEffect(() => {
    //     // useEffect는 비동기적으로 실행된다.
    //     // query에 대한 검색 결과가 완료 되었는지를 검사할 변수 필요
    //     let completed = false;

    //     async function get() {
    //         const result = await axios(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
    //         if(!completed) {
    //             setSearchs([...searchs, ...result.results]);
    //         }
    //     }

    //     get()
    //     return () => {
    //         // 다른 비동기 작업이 또 실행되지 않도록
    //         completed = true
    //     }


       // 두 번째 파라미터 []는 리액트 랜더링 조건
       // 배열이 비어있다 -> 검사할 요소가 없다는 것
       // 즉 이펙트를 실행할지 안 할지를 검사하는 변수
       // 현재 상황에선 query가 바뀌는 시점이 된다.
    // }, [query])




    // const getAPIUrl = useCallback(() => {
    //     return  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
    // }, [query]);

    // useEffect(() => {
    //     const endpoint = getAPIUrl();
    //     fetchMovies(endpoint)
    //     console.log(endpoint);
    //     return () => {
    //         completed = true;
    //     }
    // }, [getAPIUrl])



    // const fetchMovies = (endpoint) => {
        // if(!completed) {
        //     fetch(endpoint)
        //     .then((response) => response.json())
        //     .then(response => {
        //         setSearchs([...searchs, ...response.results]);
        //     });
        // }
        
    // }

   
    console.log(query);

    






    return (
        <div className="containers">
            <div>
                <input type="text" value={query} onChange={onChange} minLength="1" placeholder='Title input' />
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

