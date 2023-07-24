import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shoes from './pages/Shoes';
import Shoe from './pages/Shoe';
import Admin from './pages/Admin';
import UpdateShoe from './pages/UpdateShoe';
import SneakersSearch from './pages/SneakersSearch';
import Header from './components/Header';
import Footer from "./components/Footer"

function App() {
  return (
    <Router className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sneakers' element={<Shoes />} />
          <Route path='/sneakers/:id' element={<Shoe />} />
          <Route path='/sneakers/admin' element={<Admin />} />
          <Route path="/sneakers/edit/:id" element={<UpdateShoe />} />
          <Route path='/sneakers/search' element={<SneakersSearch />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;