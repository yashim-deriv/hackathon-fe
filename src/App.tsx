import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.page";
import History from "./pages/history.page";
import Leaderboard from "./pages/leaderboard.page";
import NavigationBar from "./components/layout/navigation";
import Members from "./pages/members.page";

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/members" element={<Members />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
