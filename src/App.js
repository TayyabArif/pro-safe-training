import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Blog } from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
     </div>
  );
}

export default App;
