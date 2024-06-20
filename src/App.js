import React from 'react'
import './App.css';
import About from './Pages/About'
import Home from './Pages/Home'
import Artical from './Pages/Artical'
import ArticalList from './Pages/ArticalList'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div id="page-body">
      <Routes>
    <Route path='/about' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/artical' element={<ArticalList/>}/>  
    <Route path='/artical/:articalId' element={<Artical/>}/>
     </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App