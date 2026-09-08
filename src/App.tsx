import { Routes, Route, Navigate } from 'react-router-dom';

import TeachersPage from './pages/TeachersPage';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage';


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};