import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="fixed inline-flex items-center justify-center top-0 bg-black w-full h-12">
            <div className="inline-flex w-11/12 text-gray-100">
                <div className="">Hackathon</div>
                <ul className="inline-flex ml-auto">
                    <li className="mr-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2">
                        <Link to="/history">History</Link>
                    </li>
                    <li className="mr-2">
                        <Link to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li className="mr-2">
                        <Link to="/members">Members</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;
