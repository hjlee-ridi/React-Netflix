import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Header from './Header/Header';


const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;