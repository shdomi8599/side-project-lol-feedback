import './App.css';
import './bootstrap.min.css'
import { useEffect, useState, useMemo, useRef, useLocation } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './pages/New';
import Edit from './pages/Edit';
import Board from './pages/Board';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyFeedback from './pages/MyFeedback';
import ChampFeedback from './pages/ChampFeedback';
import AllNav from './components/AllNav';


function App({ champData, backImg }) {


  //NEW는 게시판 새글임
  return (
    <BrowserRouter>
      <AllNav />
      <Routes>
        <Route path='/' element={<Home champData={champData} backImg={backImg} />} />
        <Route path='/champFeedback/:id' element={<ChampFeedback />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new/:id' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/board' element={<Board />} />
        <Route path='/myFeedback' element={<MyFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


