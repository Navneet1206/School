import React from 'react';

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
            <a
              href="/admissions"
              className="inline-block bg-white text-blue-900 border border-transparent rounded-md py-3 px-8 text-base font-medium hover:bg-gray-100 transition duration-300"
            >
              Apply Now
            </a>
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100"
              >
                Contact Us
              </a>
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
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">About</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/about" className="text-gray-300 hover:text-white">Our Story</a></li>
                <li><a href="/about/leadership" className="text-gray-300 hover:text-white">Leadership</a></li>
                <li><a href="/about/values" className="text-gray-300 hover:text-white">Values</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Academics</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/academics/curriculum" className="text-gray-300 hover:text-white">Curriculum</a></li>
                <li><a href="/academics/departments" className="text-gray-300 hover:text-white">Departments</a></li>
                <li><a href="/academics/faculty" className="text-gray-300 hover:text-white">Faculty</a></li>
                <li><a href="/academics/library" className="text-gray-300 hover:text-white">Library</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Student Life</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/student-life/clubs" className="text-gray-300 hover:text-white">Clubs</a></li>
                <li><a href="/student-life/sports" className="text-gray-300 hover:text-white">Sports</a></li>
                <li><a href="/student-life/arts" className="text-gray-300 hover:text-white">Arts</a></li>
                <li><a href="/student-life/events" className="text-gray-300 hover:text-white">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="/admissions" className="text-gray-300 hover:text-white">Admissions</a></li>
                <li><a href="/alumni" className="text-gray-300 hover:text-white">Alumni</a></li>
                <li><a href="/donate" className="text-gray-300 hover:text-white">Support Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                &copy; 2025 Excellence Academy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
