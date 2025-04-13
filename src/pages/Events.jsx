import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  // Sample event data (replace with real data or fetch from backend)
  const upcomingEvents = [
    {
      title: "Annual Science Fair",
      date: "May 15, 2025",
      description:
        "Showcase innovative projects by our students in physics, chemistry, and biology.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed4d2b75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Parent-Teacher Conference",
      date: "June 5, 2025",
      description:
        "Discuss your child’s progress with our dedicated faculty.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cultural Fest 2025",
      date: "July 20, 2025",
      description:
        "Celebrate diversity with performances, food, and art from around the world.",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const pastEvents = [
    {
      title: "Sports Day 2024",
      date: "October 10, 2024",
      description:
        "A thrilling day of athletic competitions and team spirit.",
      image:
        "https://images.unsplash.com/photo-1589487396657-3d4ed7eb7f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Drama Club Performance",
      date: "September 15, 2024",
      description:
        "A captivating rendition of a classic play by our talented students.",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd7f8e690?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Community Service Day",
      date: "August 20, 2024",
      description:
        "Students and staff gave back through local volunteer projects.",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events at Springfield International School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join us for exciting events that bring our community together and
            celebrate student achievements.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="School Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-blue-600 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-blue-600 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Don’t miss out on our exciting events. Get involved and be part of our
            vibrant community!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/admissions"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Join Our School
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;