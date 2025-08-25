import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
        <h1 className="text-xl font-bold">SOLAKE'S PLACE</h1>
      </div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
