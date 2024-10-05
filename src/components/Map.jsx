import React, { useState } from "react";
import axios from "axios"; // Importing Axios for API requests
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configure Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

// LocationMarker component to handle clicks on the map
const LocationMarker = ({ setLocation }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng); // Set the position when the map is clicked
      setLocation(e.latlng);
    },
  });

  return position === null ? null : (
    
    <Marker position={position}>
      <Popup>Coordinates: {position.lat}, {position.lng}</Popup>
    </Marker>
  );
};

// Main map component
const MapComponent = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const [placeData, setPlaceData] = useState(null); // State to store location data

  // Function to fetch weather data
  const fetchWeatherData = async (lat, lng) => {
    const apiKey = '397b911191bb472ba82114925240410'; // API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}`;
    
    try {
      const response = await axios.get(url); // Fetch data from the weather API
      setWeatherData(response.data); // Store the weather data in state
    } catch (error) {
      console.error('Error fetching weather data:', error); // Log any errors
    }
  };

  // Function to fetch place data from LocationIQ
  const fetchPlaceData = async (lat, lng) => {
    const apiKey = 'pk.b1fc499437140604f3132b49c10d70df'; // Replace with your actual LocationIQ API key
    const url = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${lat}&lon=${lng}&format=json`;
    
    try {
      const response = await axios.get(url); // Fetch data from the LocationIQ API
      setPlaceData(response.data); // Store the place data in state
    } catch (error) {
      console.error('Error fetching place data:', error); // Log any errors
    }
  };

  // Call the fetch functions when a location is selected
  if (location) {
    fetchWeatherData(location.lat, location.lng);
    fetchPlaceData(location.lat, location.lng); // Fetch place data when location is selected
  }

  return (
    <div className="flex flex-col items-center mt-3 lg:mt-10" >
        <h1 className="text-4xl mb-2 sm:text-1xl lg:text-1xl text-center tracking-wide">
      Choose A Place To
        <span className="bg-gradient-to-r from-purple-400 to-blue-300 text-transparent bg-clip-text">
          {" "}
           Explore more data
        </span>
      </h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker setLocation={setLocation} />
      </MapContainer>
      
      {location && (
        <div className="mt-10 text-center">
          <h3 className="text-2xl text-purple-600">Selected Location:</h3>
          <p className="text-lg text-white">Latitude: {location.lat}</p>
          <p className="text-lg text-white">Longitude: {location.lng}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center my-10 space-y-4 sm:space-y-0 sm:space-x-4"> {/* Responsive flex direction */}
        {weatherData && (
          <div className="bg-white rounded-lg shadow-lg border border-purple-700 p-5 w-72">
            <h3 className="text-lg font-semibold text-purple-600">Weather Data</h3>
            <p className="text-md text-gray-700">Temperature: {weatherData.current.temp_c} °C</p>
            <p className="text-md text-gray-700">Wind Speed: {weatherData.current.wind_kph} kph</p>
            <p className="text-md text-gray-700">Condition: {weatherData.current.condition.text}</p>
          </div>
        )}

        {placeData && (
          <div className="bg-white rounded-lg shadow-lg border border-purple-700 p-5 w-72">
            <h3 className="text-lg font-semibold text-purple-600">Place Data</h3>
            <p className="text-md text-gray-700">Display Name: {placeData.display_name}</p>
            {/* <p className="text-md text-gray-700">City: {placeData.city}</p>
            <p className="text-md text-gray-700">State: {placeData.state}</p>
            <p className="text-md text-gray-700">Country: {placeData.country}</p>
            <p className="text-md text-gray-700">Postcode: {placeData.postcode}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
