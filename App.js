import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import DramaMore from './DramaMore';
import ActionMore from './ActionMore';
import FantasyMore from './FantasyMore';
import TopDetail from './TopDetail';
import DramaDetail from './DramaDetail';
import ActionDetail from './ActionDetail';
import FantasyDetail from './FantasyDetail';




const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/DramaMore' element={<DramaMore />} />
          <Route exact path='/ActionMore' element={<ActionMore />} />
          <Route exact path='/FantasyMore' element={<FantasyMore />} />
          <Route exact path='/Netflix/:movieId' element={<TopDetail />} />
          <Route exact path='/Drama/:movieId' element={<DramaDetail />} />
          <Route exact path='/Action/:movieId' element={<ActionDetail />} />
          <Route exact path='/Fantasy/:movieId' element={<FantasyDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
