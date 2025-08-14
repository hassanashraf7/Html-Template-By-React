
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './Header'; // Import the new Header component
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Header /> {/* Use the Header component here */}
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element = {<Home />}/>
       </Routes>
      
      
    </div>
  );
};

export default App;