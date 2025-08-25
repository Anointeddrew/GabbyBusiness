import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

function Navbar() {
   const { user, role } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
        <h1 className="text-xl font-bold">SOLAKE'S PLACE</h1>
      </div>
      <div className="space-x-4">
        <Link to="/" className="font-semibold">Home</Link>
        <Link to="/about" className="font-semibold">About Us</Link>
        <Link to="/services" className="font-semibold">Services</Link>
        <Link to="/contact" className="font-semibold">Contact</Link>

        {/* Show admin link only if logged in as admin */}
        {role === "admin" && (
          <Link to="/admin/messages" className="font-semibold">
            Admin
          </Link>
        )}

        {/* Auth buttons */}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
          >
            Login
          </Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
