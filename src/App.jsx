import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Banner } from './components/banner';
import { Header } from './components/header';
import { TopPage } from './components/top-page';

function App() {
  return (
    <BrowserRouter>
      <TopPage />
      <Header />
      <Banner />
    </BrowserRouter>
  );
}

export default App;
