import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";  // Import Link
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        {/* For large screens, align "Astropioneer" to the left with navigation items in one row */}
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight ml-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Astropioneer.
            </h1>
          </div>
          <ul className="mr-20 flex space-x-20">
            {navItems.map((item, index) => (
              <li key={index}>
                {/* Use Link instead of anchor tag */}
                <Link 
                  to={item.path}  // Navigate using React Router
                  className="text-white hover:text-purple-300 hover:underline transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* For small screens, align "Astropioneer" to the left and Menu icon to the right */}
        <div className="lg:hidden flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Astropioneer.
            </h1>
          </div>
          <div className="flex items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile drawer for small screens */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  {/* Use Link for mobile drawer navigation */}
                  <Link 
                    to={item.path} 
                    className="text-white hover:text-purple-300 hover:underline transition duration-300"
                    onClick={toggleNavbar}  
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
