import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import Header from './components/Header';

export default function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/teachers', element: <TeachersPage /> },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);

  return (
    <div>
      <Header /> 
      <main>{routes}</main>
    </div>
  );
}