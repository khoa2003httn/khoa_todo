import './App.css';
import Additem from './components/Additem';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import { ItemContext } from './components/ItemContext';
import { FaRegUserCircle } from "react-icons/fa";


function App() {
  return (
    <>

      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-white text-yellow-600 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-lg font-semibold">
              <Link
                to="/"
                className="px-3 py-2 rounded-md  transition duration-300"
              >
                Sâm Todo Grup
              </Link>

            </div>
            <div className="space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/additem"
                className="px-3 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300"
              >
                Add Item
              </Link>

            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/additem" element={<Additem />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
