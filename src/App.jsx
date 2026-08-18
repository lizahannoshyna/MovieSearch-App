import React from 'react';
import { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';

import './App.css';

import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';

// import { Home } from './pages/Home';
// import { Movies } from './pages/Movies';
// import {MovieDetails} from './pages/MovieDetails';
// import { Cast } from './components/MovieDetails/Cast/Cast';
// import { Reviews } from './components/MovieDetails/Reviews/Reviews';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Movies = lazy(() => import('./pages/Movies').then(module => ({ default: module.Movies })));
const MovieDetails = lazy(() => import('./pages/MovieDetails').then(module => ({ default: module.MovieDetails })));

const Cast = lazy(() => import('./components/MovieDetails/Cast/Cast').then(module => ({ default: module.Cast })));
const Reviews = lazy(() => import('./components/MovieDetails/Reviews/Reviews').then(module => ({ default: module.Reviews })));


function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Layout />}>
          
          <Route index element={
            <Suspense fallback={<h1>Loading page...</h1>}>
              <Home />
            </Suspense>
          } />
          
          <Route path='/movies' element={
            <Suspense fallback={<h1>Loading page...</h1>}>
              <Movies />
            </Suspense>
          } />

          <Route path='/movies/:movieID' element={
            <Suspense fallback={<h1>Loading page...</h1>}>
              <MovieDetails /> 
            </Suspense>
          }>
            <Route index element={<Navigate to='cast' replace />} />
            
            <Route path='cast' element={
              <Suspense fallback={<div>Вантажимо акторський склад...</div>}>
                <Cast />
              </Suspense>
            } />
            
            <Route path='reviews' element={
              <Suspense fallback={<div>Вантажимо відгуки...</div>}>
                <Reviews />
              </Suspense>
            } />
          </Route>

<Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
