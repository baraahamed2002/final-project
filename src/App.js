
import './App.css';


import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Contact from './components/pages/Contact';
import Chariot from './components/pages/Chariot';





import { Route, Routes } from 'react-router-dom';




function App() {
  
  return (

    <div className="App">
     <Navbar/>
     
     <Routes>
     <Route path="/" element={<Home/>}/>     
     <Route path="/Profile" element={<Profile/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Chariot" element={<Chariot/>}/>
     
     </Routes>
     
     
     

    </div>
  );
}

export default App;
