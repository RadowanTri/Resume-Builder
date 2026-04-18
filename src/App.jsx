import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ResumeBuilder from './pages/ResumeBuilder.jsx';
import Preview from './pages/Preview.jsx';
import Login from './pages/Login.jsx';



const App = () => {
  return (
    <div>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path='app' element={<Layout />}>
            {/* Nested routes can be defined here */}
            <Route index element={<Dashboard />} />
            <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>
        <Route path='view/:resumeId' element={<Preview />} />
        <Route path='login' element={<Login />} />
      </Routes>

    </div>
  ); 
};

export default App;