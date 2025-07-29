import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Importación de páginas
import LandingPage from "../pages/LandingPage";
import CoverageArea from "../pages/CoverageArea";
import LevelsOfServices from "../pages/LevelsOfServices";
import Testimonios from "../pages/Testimonios";
import Trips from "../pages/Trips";
import TypesVehicles from "../pages/TypesVehicles";
import Contacto from "../pages/Contacto";
import { useEffect } from "react";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <MainLayout>
      <Routes location={location} key={location.pathname}>
        {/* Ruta principal */}
        <Route path="/" element={<LandingPage />} />

        {/* Rutas secundarias */}
        <Route path="/coverage" element={<CoverageArea />} />
        <Route path="/services" element={<LevelsOfServices />} />
        <Route path="/testimonials" element={<Testimonios />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/vehicles" element={<TypesVehicles />} />
        <Route path="/contact" element={<Contacto />} />

        {/* Ruta para manejar páginas no encontradas */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-800">
                404 - Page not found
              </h1>
            </div>
          }
        />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
