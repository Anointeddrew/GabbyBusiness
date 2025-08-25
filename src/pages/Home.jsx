function Home() {
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to Our Business</h2>
      <p className="text-lg text-gray-600 mb-6">We offer excellent food sales, catering and agricultural services tailored to your needs.</p>
      <a
        href="/contact"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Get Started
      </a>
    </section>
  );
}

export default Home;
