import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.page";
import History from "./pages/history.page";
import Leaderboard from "./pages/leaderboard.page";
import NavigationBar from "./components/layout/navigation";

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
