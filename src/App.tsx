import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.page";
import History from "./pages/history.page";
import Rank from "./pages/rank.page";

const App = () => {
    return (
        <React.Fragment>
            <h1>Navigation</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/rank" element={<Rank />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
