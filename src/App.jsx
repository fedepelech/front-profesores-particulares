import jwtDecode from 'jwt-decode';
import React from 'react';
import { useContext } from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { TopPage } from './components/top-page';
import { Context } from './context';
import { ClassDetailPage } from './pages/class-detail';
import { ClassEdit } from './pages/class-edit';
import { Home } from './pages/home';
import { NewClass } from './pages/new-class';
import { Profile } from './pages/profile';
import { Signup } from './pages/signup';

function App() {
  const { user, setUser } = useContext(Context);
  if(!user.id) {
    const token = localStorage.getItem('token') || null;
    if(token) {
      const decoded = jwtDecode(token);
      setUser({
        id: decoded.id,
        firstName: decoded.firstName,
        surName: decoded.surName, 
        email: decoded.email,
        role: decoded.role,
        subscribedClasses: decoded.subscribedClasses
      });
    }
  }

  return (
    <BrowserRouter>
      {!user.firstName && <TopPage />}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/new-class" element={<NewClass />} />
        {/* <Route exact path="/class/1/suscription" element={<NewClass />} /> */}
        <Route exact path="/class/edit" element={<ClassEdit />} />
        <Route exact path="/class/detail" element={<ClassDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
