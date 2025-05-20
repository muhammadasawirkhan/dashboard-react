


import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "./Routes/route.jsx";

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

// Separate component that uses useRoutes inside Router context
function AppRoutes() {
  const routing = useRoutes(routes);
  return routing;
}
