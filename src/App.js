import React from 'react'
import './App.css';
import About from './Pages/About'
import Home from './Pages/Home'
import Artical from './Pages/Artical'
import ArticalList from './Pages/ArticalList'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <h2>My Awosome Blog</h2>
    <div>
      <Routes>
    <Route path='/about' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/artical' element={<Artical/>}/>  
    <Route path='/about:articalid' element={<ArticalList/>}/>
     </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App