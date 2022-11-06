import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import MovieApi from './movieApi';


const App = () => {
 
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <MovieApi />
    </div>
  );
};

export default App;
