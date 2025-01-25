import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/vitalosLogo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo with link to the top */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex items-center scroll-smooth">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">Vitalos</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="scroll-smooth">{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Call-to-Action */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="https://www.instagram.com/vitalosgame/"
              className="py-2 px-3 border rounded-md"
            >
              Learn More
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} className="scroll-smooth">{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/vitalosgame/"
                className="py-2 px-3 border rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
