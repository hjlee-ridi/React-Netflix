import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import {API_URL, API_key, IMAGE_BASE_URL} from "./components/config";


function MovieApi(props) {
  const [movies, setMovies] = useState(null);
  const [mainMovieImg, setMainMovieImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 movies 를 초기화하고
        setError(null);
        setMovies(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/movie/popular?api_key=${API_key}&language=en-US&page=1`
        );
        setMovies(response.data); // 데이터는 response.data 안에 들어있습니다.
        setMainMovieImg(setMainMovieImg || response.results[0]);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!movies) return null;
console.log(movies.results);

  return (
    <div>
        {movies.results.map(movie => {
            return (
                <Movie
                image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
                      : null
                  }
                title={movie.title}
                overview={movie.overview}
                />

            );
        })}

    </div>
  );
}


export default MovieApi;