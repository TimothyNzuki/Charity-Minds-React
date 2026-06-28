import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import Dashboard from "./components/Dashboard";
import StatsCards from "./components/StatsCards";
import Filter from"./components/Filter";
import UserTable from"./components/UserTable";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App () {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <main className="container mx-auto p-6">
        <WelcomeSection/>
        {/*<StatsCards/>*/}
        <Dashboard/>
       {/* <Filter/>*/}
        {/*<UserTable/>*/}
        {/*<Pagination/>*/}

      </main>
      <Footer/>
    </div>
  );
}
export default App;