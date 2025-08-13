import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";

const navLink = [
  {
    name: "Home",
    icon: <FaHome />,
    href: "#"
  },
  {
    name: "About",
    icon: <FaInfoCircle />,
    href: "#"
  },
  {
    name: "Service",
    icon: <FaServicestack />,
    href: "#"
  },
  {
    name: "Contact",
    icon: <FaEnvelope />,
    href: "#"
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">🚀 My website</h1>

       
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

      
          <ul className="hidden md:flex space-x-6">
            {navLink.map((link, index) => (
              <li key={index}>
                <a
                  className="flex items-center gap-1 hover:text-blue-400"
                  href={link.href}
                >
                  {link.name}
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

       
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-4 p-4 bg-gray-800 rounded-lg">
            {navLink.map((link, index) => (
              <li key={index}>
                <a
                  className="flex items-center gap-2 hover:text-blue-400"
                  href={link.href}
                  onClick={() => setIsOpen(false)} 
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
