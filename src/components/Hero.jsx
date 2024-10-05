import { Link } from "react-router-dom";
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" >
      Welcome to Imagen 
        <span className="bg-gradient-to-r from-purple-400 to-blue-300 text-transparent bg-clip-text">
          {" "}
          Our Connected Earth
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
      This website presents our innovative solution for the 
      NASA Space Apps Challenge, aiming to connect communities 
      and foster sustainable practices for a healthier planet.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#map"
          className="bg-gradient-to-r from-purple-400 to-blue-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Start Now
        </a>
        <Link to="/kids" className="py-3 px-4 mx-3 rounded-md border border-purple-700 text-white">
          For Kids
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          src={img1}
          alt="Image 1"
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-purple-400 mx-2 my-4"
        />
        <img
          src={img2}
          alt="Image 2"
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-purple-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default Hero;
