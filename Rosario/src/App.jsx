import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import InitialPage from "./components/InitialPage/InitialPage"
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
      
          <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<InitialPage />} />
{/*             <Route path="/signin" element={<Signin />} />
            
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<History />} />
            <Route path="/" element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
