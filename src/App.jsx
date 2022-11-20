import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';




function App() {
  return (
    <BrowserRouter>
        
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />              
            <Route path='/contact' element={ <Contact /> }  /> 
            <Route path='/newproject' element={<NewProject />}  />
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
