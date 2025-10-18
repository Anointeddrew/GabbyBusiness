function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
        <div>
          <h3 className="font-bold text-lg mb-2">Solake's Place</h3>
          <p className="text-sm">&copy; {new Date().getFullYear()} Solake's Place. All rights reserved.</p>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-2">Office Address</h3>
          <p className="text-sm">9 Zone C Behind Zion High International School, before Victoria Salem Int'l School, Kwanga B along Lamigo-Rayfield Road, Jos</p>
          <p className="text-sm">Plateau, Nigeria</p>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us on...</h3>
          <p className="text-sm">Email: info@solakesplace.com</p>
          <p className="text-sm">Phone: +234 703-449-6448</p>
        </div>
      </div>

      {/*I added Additional footer note */}
      <div className="bg-gray-200 py-2 mt-4 text-center text-xs text-gray-500">
        Designed with ❤️ by DrewTech
      </div>
    </footer>
  );
}

export default Footer;
