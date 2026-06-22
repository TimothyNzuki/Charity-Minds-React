import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import StatCards from "./components/StatCards";
import Filter from"./components/Filter";
import UserTable from"./components/UserTable";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App () {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/> 
      <main className="container mx-auto p-6">
        <WelcomeSection/>
        <StatCards/>
        <Filter/>
        <UserTable/>
        <Pagination/>

      </main>
      <Footer/>
    </div>
  );
}
export default App;