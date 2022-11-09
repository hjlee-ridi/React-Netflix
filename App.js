import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Movie from './components/Movie';
import Header from './Header';
import MovieApi from './movieApi';

const App = () => {
 
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route exact path='/'>
          <MovieApi />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
