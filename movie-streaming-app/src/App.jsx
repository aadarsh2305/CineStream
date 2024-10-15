import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        Tailwind CSS is working!
      </h1>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/movies/:id" element={<MovieDetail />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
