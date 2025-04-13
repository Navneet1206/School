import React from "react";
import { Link } from "react-router-dom";

const Academics = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Excellence at Springfield International School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Our rigorous and innovative curriculum prepares students for a dynamic
            world, fostering critical thinking and lifelong learning.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Academic Excellence"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            At Springfield International School, our curriculum blends academic
            rigor with experiential learning, designed to meet global standards
            while nurturing individual talents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Education",
                description:
                  "A strong foundation in literacy, numeracy, and critical thinking for young learners.",
                image:
                  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Secondary Education",
                description:
                  "Advanced courses in sciences, humanities, and arts to prepare for higher education.",
                image:
                  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Extracurricular Programs",
                description:
                  "Clubs, sports, and arts to foster creativity and teamwork beyond the classroom.",
                image:
                  "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1f56cf25a386?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Teaching Philosophy"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Teaching Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in student-centered learning, where teachers act as
                facilitators to inspire curiosity and independence. Our approach
                integrates technology, project-based learning, and global
                perspectives to prepare students for the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Academic Support Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Counseling",
                description:
                  "Personalized guidance to support academic and emotional growth.",
                icon: "🧠",
              },
              {
                title: "Tutoring",
                description:
                  "One-on-one sessions to reinforce concepts and boost confidence.",
                icon: "📚",
              },
              {
                title: "Career Guidance",
                description:
                  "Helping students plan their future with college and career advice.",
                icon: "💼",
              },
              {
                title: "Special Needs",
                description:
                  "Inclusive programs tailored to diverse learning needs.",
                icon: "🤝",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Programs
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Learn more about our academic offerings and how we can support your
            child’s educational journey.
          </p>
          <Link
            to="/admissions"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Academics;