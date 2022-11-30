import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";


const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;