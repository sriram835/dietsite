import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepg from './pages/home';
import Exercisepg from './pages/exercises';

function App() {
    return(
       
            <Routes>
                <Route exact path="/" element={<Homepg />} />
                <Route exact path="/exercise" element={<Exercisepg />} />
            </Routes>
    );
}

export default App;