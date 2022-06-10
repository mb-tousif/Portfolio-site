import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { ToastContainer } from "react-toastify";
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blogs/Blog';
import About from './Components/About/About';
import Project from './Components/Home/Project';
import ProjectDetails from './Components/Projects/ProjectDetails';
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project/>}/>
        <Route path="/projects/:id" element={<ProjectDetails/>}/>
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
