import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { ToastContainer } from "react-toastify";
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
