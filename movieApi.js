import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieApi() {
  const [movieApi, setMovieApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 movieApi 를 초기화하고
        setError(null);
        setMovieApi(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://yts.mx/api/v2/list_movies.json'
        );
        setMovieApi(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!movieApi) return null;
console.log(movieApi.data.movies);
  
  return (
      <ul>{movieApi.data.movies}</ul>

  );
};


export default MovieApi;