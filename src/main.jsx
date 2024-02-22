import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './components/pages/Home'
import Popular from './components/pages/Popular'
import Trending from './components/pages/Trending'
import New from './components/pages/New'
import Categories from './components/pages/Categories'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
