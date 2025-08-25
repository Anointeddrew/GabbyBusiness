function Services() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Sales", icon: "🍔" },
          { title: "Catering & Event Management", icon: "🍽️" },
          { title: "Rentals", icon: "🍳" },
          { title: "Agricultural Services", icon: "🌾" }
        ].map((service, idx) => (
          <div key={idx} className="bg-white shadow p-6 rounded text-center border">
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="font-semibold text-lg">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
