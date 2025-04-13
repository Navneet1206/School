import React from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Team at Springfield International School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Be part of a passionate community dedicated to shaping the future
            through education.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1557426272-fc91fdb8f453?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Careers at School"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            At Springfield International School, we value our educators and staff
            as the heart of our mission. Join a supportive environment where
            professional growth, collaboration, and impact are prioritized.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Development",
                description:
                  "Access to workshops, certifications, and continuous learning opportunities.",
                icon: "📈",
              },
              {
                title: "Collaborative Culture",
                description:
                  "Work with a diverse team committed to excellence and innovation.",
                icon: "🤝",
              },
              {
                title: "Competitive Benefits",
                description:
                  "Health insurance, retirement plans, and generous leave policies.",
                icon: "💼",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Current Job Openings
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Mathematics Teacher",
                department: "Secondary Education",
                description:
                  "Seeking a passionate educator to teach algebra and calculus to grades 9-12.",
                requirements:
                  "Bachelor’s degree in Mathematics, teaching certification, 3+ years of experience.",
              },
              {
                title: "School Counselor",
                department: "Student Services",
                description:
                  "Provide academic and emotional support to students across all grades.",
                requirements:
                  "Master’s degree in Counseling, experience in school settings.",
              },
              {
                title: "Administrative Assistant",
                department: "Operations",
                description:
                  "Support daily school operations, including scheduling and communication.",
                requirements:
                  "Strong organizational skills, proficiency in MS Office.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-blue-600 mb-2">{job.department}</p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <p className="text-gray-600 mb-4">
                  <strong>Requirements:</strong> {job.requirements}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            No suitable openings? Send your resume to{" "}
            <a
              href="mailto:careers@springfieldschool.org"
              className="text-blue-600 hover:underline"
            >
              careers@springfieldschool.org
            </a>{" "}
            for future opportunities.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            How to Apply
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
              <p className="text-gray-600 leading-relaxed">
                We’re excited to hear from you! Follow these steps to join our
                team:
              </p>
              <ol className="list-decimal pl-6 mt-4 text-gray-600">
                <li>Review the job openings above.</li>
                <li>
                  Submit your resume and cover letter to{" "}
                  <a
                    href="mailto:careers@springfieldschool.org"
                    className="text-blue-600 hover:underline"
                  >
                    careers@springfieldschool.org
                  </a>
                  .
                </li>
                <li>Include the job title in the subject line.</li>
                <li>Shortlisted candidates will be contacted for interviews.</li>
              </ol>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Application Process"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shape the Future with Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Join Springfield International School and make a difference in the
            lives of our students.
          </p>
          <a
            href="mailto:careers@springfieldschool.org"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Apply Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;