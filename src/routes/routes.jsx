import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import LoadingScreen from "../components/common/LoadingScreen";
import ErrorBoundary from "../components/common/ErrorBoundary";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Lazy load project components
const projectComponents = {
  form: lazy(() => import("../Simple_Form/Form")),
  birthday: lazy(() => import("../BirthdayApp/BirthdayApp")),
  todo: lazy(() => import("../React-Redux/TodoApp")),
  weather: lazy(() => import("../WeatherApp/weather")),
  search: lazy(() => import("../SearchBar/SearchApp")),
  datatable: lazy(() => import("../datatable/Pages/DatatableApp")),
};

// Page transition variants
const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// Animated route component
const AnimatedRoute = ({ element }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransitionVariants}
    style={{ width: "100%" }}
  >
    <ErrorBoundary>{element}</ErrorBoundary>
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Home route */}
            <Route path="/" element={<AnimatedRoute element={<Home />} />} />

            {/* Project routes */}
            {projects.map(({ id, path }) => (
              <Route
                key={id}
                path={path}
                element={
                  projectComponents[id] ? (
                    <AnimatedRoute
                      element={
                        <Suspense
                          fallback={
                            <LoadingScreen
                              message={`Loading ${id} project...`}
                            />
                          }
                        >
                          {React.createElement(projectComponents[id])}
                        </Suspense>
                      }
                    />
                  ) : (
                    <Navigate to="/404" replace />
                  )
                }
              />
            ))}

            {/* 404 route */}
            <Route
              path="/404"
              element={<AnimatedRoute element={<NotFound />} />}
            />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
