import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import MovieApi from './movieApi';
import styles from "./styles.css";



const App = () => {
 
  return (
    <div className="App">
      <MovieApi />
    </div>
  );
};

export default App;
