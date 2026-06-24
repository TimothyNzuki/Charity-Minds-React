import { Link } from "react-router-dom";

function Navbar () {
    return (
        <header className="bg-amber-700 text-white shadow-md flex justify-between items-center p-6">
            <h1 className="text-3xl font-bold">Charity Minds</h1>
            <button className="md:hidden focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6H20 M4 12H20 M4 18H20"></path>
                
                </svg> 
            </button>
            <nav className="hidden md:block">
                <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 list-none">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/register" className="hover:text-blue-500">Register</Link></li>
                    <li><Link to="/login" className="hover:text-blue-500">Login</Link></li>
                    <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;