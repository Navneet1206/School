import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">      
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://i.ytimg.com/vi/9MoGJt55A0s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAsZFXYw6RNF00HUcSDOVswXWqKNA" 
            alt="School Building" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to Excellence Academy
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Nurturing minds, building character, and inspiring excellence in education since 1995.
          </p>
          <div className="mt-10">
            <Link to ="/admissions" className="inline-block bg-white text-blue-900 border border-transparent rounded-md py-3 px-8 text-base font-medium hover:bg-gray-100 transition duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Excellence Academy
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Providing quality education with a focus on holistic development
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src="/academics.jpg" alt="Academic Excellence" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Academic Excellence</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Consistently achieving outstanding results with dedicated faculty and innovative teaching methods.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src="/sports.jpg" alt="Sports Facilities" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Sports & Recreation</h3>
                  <p className="mt-3 text-base text-gray-500">
                    State-of-the-art sports facilities encouraging physical fitness and team spirit.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src="/arts.jpg" alt="Arts and Culture" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Arts & Culture</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Vibrant cultural programs fostering creativity and appreciation for the arts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News & Events Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Latest News & Events
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                Stay updated with the latest happenings at our school
              </p>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <a
                href="/events"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700"
              >
                View All
              </a>
            </div>
          </div>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Event 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="text-sm text-gray-500 mb-2">May 15, 2025</div>
                <h3 className="text-lg font-medium text-gray-900">Annual Science Fair</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Students showcase innovative projects and experiments in our annual science exhibition.
                </p>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="text-sm text-gray-500 mb-2">June 5, 2025</div>
                <h3 className="text-lg font-medium text-gray-900">Sports Day</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Annual athletic meet featuring track and field events, team sports, and more.
                </p>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="text-sm text-gray-500 mb-2">June 20, 2025</div>
                <h3 className="text-lg font-medium text-gray-900">Cultural Festival</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A celebration of diversity through music, dance, and theatrical performances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            What Our Community Says
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="/parent1.jpg" alt="Parent" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 italic">
                    "The teachers at Excellence Academy have been instrumental in my child's academic growth and character development."
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="/student1.jpg" alt="Student" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 italic">
                    "The opportunities I've had at this school have prepared me well for university and beyond."
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-500">Alumni, Class of 2022</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="/teacher1.jpg" alt="Teacher" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 italic">
                    "Teaching at Excellence Academy has been rewarding. The collaborative environment allows us to bring out the best in our students."
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-900">Dr. Emily Rodriguez</p>
                    <p className="text-sm text-gray-500">Science Department Head</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Ready to join our community?</span>
            <span className="block text-blue-300">Schedule a campus visit today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
             
                <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100">
                Contact Us
                </Link>
                
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/admissions"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Home;
