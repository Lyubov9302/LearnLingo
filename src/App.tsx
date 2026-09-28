import { Routes, Route, Navigate } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/teachers"
          element={<TeachersPage />}
        />

        <Route
          path="/favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </>
  );
};
