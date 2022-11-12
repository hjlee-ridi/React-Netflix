import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import HomeDrama from './HomeDrama';


const App = () => {
 
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        
      </Routes>
      <HomeDrama />
      </div>
    </BrowserRouter>
  );
}

export default App;
