import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Sample gallery data (replace with real images or fetch from backend)
  const gallerySections = [
    {
      title: "Academic Achievements",
      images: [
        {
          src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Science Fair 2024 Winners",
        },
        {
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Math Olympiad Preparation",
        },
        {
          src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Classroom Learning",
        },
      ],
    },
    {
      title: "Sports & Athletics",
      images: [
        {
          src: "https://images.unsplash.com/photo-1589487396657-3d4ed7eb7f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Annual Sports Day 2024",
        },
        {
          src: "https://images.unsplash.com/photo-1552674604-36fb9c1d8e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Soccer Championship",
        },
        {
          src: "https://images.unsplash.com/photo-1512941675423-6b1e6f75a3c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Track and Field Events",
        },
      ],
    },
    {
      title: "Cultural Events",
      images: [
        {
          src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Annual Cultural Fest",
        },
        {
          src: "https://images.unsplash.com/photo-1517457373958-b7bdd7f8e690?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Drama Club Performance",
        },
        {
          src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Art Exhibition 2024",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Vibrant School Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore the moments that make Springfield International School a
            lively and inspiring community.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="School Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Gallery Sections */}
      {gallerySections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-16 bg-white odd:bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative group rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Join Springfield International School and create memories that last a
            lifetime.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;