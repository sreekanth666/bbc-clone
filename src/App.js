import './App.css';
import Navigation1 from './Components/Navigation1';
import Navigation2 from './Components/Navigation2';
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom';
import SearchResult from './Components/SearchResult';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Navigation1 />
      <Navigation2 />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<SearchResult />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
