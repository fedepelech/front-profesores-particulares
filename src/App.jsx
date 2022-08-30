import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
