import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const { user, role } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="bg-gray-400 text-white p-4 flex justify-between rounded-full items-center">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl text-black font-bold italic">SOLAKE'S PLACE</h1>
      </div>

      {/* Hamburger Button (mobile) */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block h-0.5 bg-white w-6"></span>
        <span className="block h-0.5 bg-white w-6"></span>
        <span className="block h-0.5 bg-white w-6"></span>
      </button>

      {/* Menu Items */}
      <div
        ref={menuRef}
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 right-4 bg-gray-600 rounded-lg p-4 md:static md:flex md:space-x-4 md:bg-transparent md:p-0`}
      >
        <Link to="/" className="font-semibold block md:inline">
          Home
        </Link>
        <Link to="/about" className="font-semibold block md:inline">
          About Us
        </Link>
        <Link to="/services" className="font-semibold block md:inline">
          Services
        </Link>
        <Link to="/contact" className="font-semibold block md:inline">
          Contact
        </Link>

        {/* Admin Link - only for admins */}
        {role === "admin" && (
          <Link to="/admin/messages" className="font-semibold block md:inline">
            Admin
          </Link>
        )}

        {/* Auth buttons */}
        {user ? (
          <button
            onClick={handleLogout}
            className="text-red-500 px-3 py-1 rounded hover:bg-red-600 hover:text-white block md:inline"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-blue-200 px-3 py-1 rounded hover:bg-blue-600 block md:inline"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
