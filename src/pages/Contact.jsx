import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder for form submission (add backend integration later)
    try {
      // Example: await axios.post("/api/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We’d love to hear from you! Whether you have questions or feedback,
            our team is here to help.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Send Us a Message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-gray-600">
                123 Education Lane, Springfield, ST 12345
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-gray-600">
                <a
                  href="mailto:info@springfieldschool.org"
                  className="text-blue-600 hover:underline"
                >
                  info@springfieldschool.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Find Us
          </h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">
              [Google Maps Embed Placeholder - Add API Key for Live Map]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;