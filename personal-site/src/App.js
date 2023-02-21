import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Photography from './pages/photography';
import Header from './components/header';
import Projects from './pages/projects';
import Streaming from './pages/streaming';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Photography' element={<Photography/>}/>
         <Route path='/Projects' element={<Projects/>}/>
         <Route path='/Streaming' element={<Streaming/>}/>
      </Routes>
    </Router>
  );
}

export default App;
