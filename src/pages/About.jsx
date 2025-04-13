import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust path if needed
import Footer from "../components/Footer"; // Adjust path if needed

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Springfield International School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover our commitment to excellence in education, fostering a
            nurturing environment where every student thrives.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Get in Touch
          </Link>
        </div>
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Welcome to Our School
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Springfield International School, we believe in empowering students
            to reach their full potential through holistic education. Established
            with a vision to create global citizens, our institution combines
            academic rigor with character development, fostering creativity,
            critical thinking, and compassion.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="School History"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our History
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 1985, Springfield International School began as a small
                community institution with a dream to provide quality education.
                Over the decades, we have grown into a leading educational
                establishment, recognized for our innovative teaching methods and
                dedication to student success. Today, we proudly serve a diverse
                student body from across the region and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide a dynamic and inclusive learning environment that
                inspires students to excel academically, grow personally, and
                contribute positively to society.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be a global leader in education, nurturing innovative thinkers
                and compassionate leaders who shape a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "Striving for the highest standards in education and personal growth.",
                icon: "🏆",
              },
              {
                title: "Integrity",
                description:
                  "Fostering honesty, respect, and ethical behavior in all we do.",
                icon: "🤝",
              },
              {
                title: "Inclusivity",
                description:
                  "Embracing diversity and ensuring every voice is heard.",
                icon: "🌍",
              },
              {
                title: "Innovation",
                description:
                  "Encouraging creativity and forward-thinking solutions.",
                icon: "💡",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Faculty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Emily Carter",
                role: "Principal",
                bio: "With over 20 years of experience in education, Dr. Carter leads with passion and vision.",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d877c828f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
              },
              {
                name: "Mr. James Patel",
                role: "Head of Science",
                bio: "An inspiring educator who ignites curiosity in young scientists.",
                image:
                  "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
              },
              {
                name: "Ms. Sarah Lee",
                role: "English Teacher",
                bio: "Fostering a love for literature and creative expression in her students.",
                image:
                  "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
              },
            ].map((faculty, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {faculty.name}
                </h3>
                <p className="text-blue-600">{faculty.role}</p>
                <p className="text-gray-600 mt-2">{faculty.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            State-of-the-Art Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Classrooms",
                description:
                  "Equipped with smart boards and ergonomic furniture for an optimal learning experience.",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Science Labs",
                description:
                  "Cutting-edge laboratories for hands-on experiments in physics, chemistry, and biology.",
                image:
                  "https://images.unsplash.com/photo-1580582932707-520aed4d2b75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Sports Complex",
                description:
                  "A sprawling complex with fields, courts, and tracks to nurture athletic talent.",
                image:
                  "https://images.unsplash.com/photo-1589487396657-3d4ed7eb7f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "National Science Olympiad",
                description: "1st Place in 2024",
              },
              {
                title: "State Debate Championship",
                description: "Champions for 3 Consecutive Years",
              },
              {
                title: "Community Service Award",
                description: "Recognized for Outstanding Social Impact",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Springfield transformed my child's approach to learning. The teachers are exceptional!",
                author: "Mrs. Linda Thompson, Parent",
              },
              {
                quote:
                  "I’ve grown so much here, both academically and personally. It’s a place where dreams take flight.",
                author: "Aryan Sharma, Student",
              },
              {
                quote:
                  "The supportive community and excellent facilities make teaching here a joy.",
                author: "Ms. Priya Desai, Teacher",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 italic mb-4">“{testimonial.quote}”</p>
                <p className="text-blue-600 font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Ready to be part of Springfield International School? Explore our
            programs and start your journey with us today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;