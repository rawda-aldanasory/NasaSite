import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import ImageGallery from './components/Dashboards';
import MapComponent from './components/Map';
import MoreData from './components/More';
import Navebar from './components/Navebar';
import Kids from './components/Kids'; 
const App = () => {
  return (
    <Router>
      <Navebar />
      
      {/* Define the routes here */}
      <Routes>
        <Route path="/" element={
          <div className="max-w-7xl mx-auto pt-20 px-6" id="home">
            <Hero />
          </div>
        } />
        <Route path="/kids" element={<Kids />} />
      </Routes>
      
      {/* Existing sections */}
      <div className="max-w-7xl mx-auto pt-20 px-6" id="map">
        <MapComponent />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-3" id="analysis">
        <ImageGallery />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-3" id="more">
        <MoreData />
      </div>
    </Router>
  );
};

export default App;
