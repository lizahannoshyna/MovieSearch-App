import React from 'react';
import { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import './App.css';

import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import {MovieDetails} from './pages/MovieDetails';
import { Cast } from './components/MovieDetails/Cast/Cast';
import { Reviews } from './components/MovieDetails/Reviews/Reviews';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <>
     <Routes>

      <Route path='/' element={<Layout/>}>

      <Route index element={<Home/>}/>
      <Route path='/movies' element={<Movies/>} />

      <Route path='/movies/:movieID' element={<MovieDetails/>}>
      <Route index element={<Navigate to='cast' replace/>}/>
      <Route path='cast' element={<Cast/>}/>
      <Route path='reviews' element={<Reviews/>}/>
      </Route>

      <Route path='*' element={<NotFound/>} />

      </Route>

     </Routes>
    </>
  )
}

export default App
