import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 border rounded"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
