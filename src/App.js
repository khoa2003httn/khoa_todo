  import './App.css';
  import Additem from './components/Additem';
  import Home from './components/Home';
  import { Routes, Route, Link } from 'react-router-dom';
import { ItemContext } from './components/ItemContext';

  function App() {
    return (
      <>
      
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/additem">Add Item</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/additem" element={  <Additem />} />
          </Routes>
        </div>
      </>
    );
  }

  export default App;
