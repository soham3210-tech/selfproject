import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Book from './pages/Book';
import Contact from './pages/Contact';
import './App.css';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
