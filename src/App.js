import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Categories from './Categories';
import Kids from './Kids';
import Error from './Error';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import YoutubeForm from './components/YoutubeForm';
function App() {
  return (

    <>
     <HoverCounter/>
    <ClickCounter/>
    <YoutubeForm/>
     </>

    // <Router>
    // <Navbar/>
    //   <Routes>
    //     <Route exact path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/categories' element={<Categories />} />
    //        <Route path='kids' element={<Kids/>}/>
    //     <Route path='*' element={<Error/>}/>
    //     </Routes>
    // </Router>
         //Code for HOC
    
  );
}

export default App;
