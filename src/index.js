import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import ExpensePage from "./pages/ExpensePage";
import GoalPage from "./pages/GoalPage";
import IncomePage from "./pages/IncomePage";
import AnalysisPage from "./pages/AnalysisPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path ="expense" element={<ExpensePage />} />
          <Route path ="income" element={<IncomePage />} />
          <Route path ="saving-goals" element={<GoalPage />} />
          <Route path ="analysis" element={<AnalysisPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
