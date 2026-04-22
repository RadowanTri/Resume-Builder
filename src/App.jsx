import React from 'react';
import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ResumeBuilder from './pages/ResumeBuilder.jsx';
import Preview from './pages/Preview.jsx';
import Login from './pages/Login.jsx';
import { AuthProvider } from './context/AuthContext';

const ProtectedRouteWrapper = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};


const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<Layout />}>
        <Route index element={
          <ProtectedRouteWrapper>
            <Dashboard />
          </ProtectedRouteWrapper>
        } />
        <Route path="builder/:resumeId" element={
          <ProtectedRouteWrapper>
            <ResumeBuilder />
          </ProtectedRouteWrapper>
        } />
      </Route>
      <Route path="/view/:resumeId" element={<Preview />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <div>
        <AppContent />
      </div>
    </AuthProvider>
  ); 
};

export default App;
