import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import DramaMore from './DramaMore';


const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/DramaMore' element={<DramaMore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
