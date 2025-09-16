
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Header from './component/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/work' element={<Work/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
