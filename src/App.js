import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CollegeDetail from "./pages/CollegeDetail";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/College-Tracker" element={<Home />} />
                    <Route path="/College-Tracker/college/:id" element={<CollegeDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
