import React from "react";
import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Scores from "./pages/Scores";
import Settings from "./pages/Settings";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<Scores />} />
      </Routes>
    </>
  );
};

export default App;
