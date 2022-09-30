import React from 'react';
import { useContext } from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { TopPage } from './components/top-page';
import { Context } from './context';
import { ClassDetailPage } from './pages/class-detail';
import { Home } from './pages/home';
import { NewClass } from './pages/new-class';
import { Profile } from './pages/profile';
import { Signup } from './pages/signup';

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      {!user.firstName && <TopPage />}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/new-class" element={<NewClass />} />
        <Route exact path="/class/:id/detail" element={<ClassDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
