import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";
import UpcomingMore from './More/UpcomingMore';
import DramaMore from './More/DramaMore';
import ActionMore from './More/ActionMore';
import FantasyMore from './More/FantasyMore';
import BannerDetail from './Detail/BannerDetail';
import TopDetail from './Detail/TopDetail';
import UpcomingDetail from './Detail/UpcomingDetail';
import DramaDetail from './Detail/DramaDetail';
import FantasyDetail from './Detail/FantasyDetail';
import ActionDetail from './Detail/ActionDetail';



const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Netflix/:movieId' element={<BannerDetail />} />
          <Route exact path='/Netflix/:movieId' element={<TopDetail />} />
          <Route exact path='/UpcomingMore' element={<UpcomingMore />} />
          <Route exact path='/Upcoming/:movieId' element={<UpcomingDetail />} />
          <Route exact path='/DramaMore' element={<DramaMore />} />
          <Route exact path='/Drama/:movieId' element={<DramaDetail />} />
          <Route exact path='/ActionMore' element={<ActionMore />} />
          <Route exact path='/Action/:movieId' element={<ActionDetail />} />
          <Route exact path='/FantasyMore' element={<FantasyMore />} />
          <Route exact path='/Fantasy/:movieId' element={<FantasyDetail />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;