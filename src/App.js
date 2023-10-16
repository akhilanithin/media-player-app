import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import WatchHistory from './Pages/WatchHistory';
import Header from "./Components/Header";
import Footer from "./Components/Footer"





function App() {
  return (
    <div className="App">

      <Header />


      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/watch-history' element={<WatchHistory />}></Route>
      </Routes>

      <hr/>

      <Footer />

    </div>
  );
}

export default App;







