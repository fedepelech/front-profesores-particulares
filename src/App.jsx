import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { TopPage } from './components/top-page';

function App() {
  return (
    <BrowserRouter>
      <TopPage />
      <Header />
    </BrowserRouter>
  );
}

export default App;
