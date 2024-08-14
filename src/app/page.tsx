// app/page.tsx
import {
  FaQuran,
  FaUserGraduate,
  FaGlobeAmericas,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in-down">
              QuranConnect
              <span className="block text-2xl mt-2 font-normal">
                Online Academy
              </span>
            </h1>
            <p className="text-xl mb-8 animate-fade-in">
              Embark on your journey of Quranic learning from the comfort of
              your home
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-amber-400 text-emerald-800 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition duration-300 transform hover:scale-105 shadow-lg">
                Book Your Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-emerald-600 transition duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-amber-50 transform -skew-y-3"></div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-800">
            Why Choose QuranConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaQuran className="text-5xl mb-6 text-amber-400" />,
                title: "Expert Teachers",
                description: "Learn from certified Quran teachers",
              },
              {
                icon: (
                  <FaUserGraduate className="text-5xl mb-6 text-amber-400" />
                ),
                title: "Personalized Learning",
                description: "Tailored instruction for your needs",
              },
              {
                icon: (
                  <FaGlobeAmericas className="text-5xl mb-6 text-amber-400" />
                ),
                title: "Global Community",
                description: "Connect with learners worldwide",
              },
              {
                icon: (
                  <FaCalendarAlt className="text-5xl mb-6 text-amber-400" />
                ),
                title: "Flexible Scheduling",
                description: "Learn at your own pace and time",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className="inline-block p-4 bg-emerald-100 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Noorani Qaida",
              "Quran Reading & Recitation",
              "Tajweed",
              "Quran Memorization (Hifz)",
              "Duas and Salah",
              "Basic Islamic Education",
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className="h-2 bg-amber-400"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
                    {course}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Learn more about our {course} course and start your journey
                    today.
                  </p>
                  <button className="text-amber-500 font-semibold hover:text-amber-600 transition duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-800">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Ahmed",
                quote:
                  "QuranConnect has transformed my understanding of the Quran. The teachers are knowledgeable and patient.",
              },
              {
                name: "Fatima",
                quote:
                  "I never thought I could learn Tajweed online, but QuranConnect made it easy and enjoyable.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 relative"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-4xl text-emerald-700">&quot;</span>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6 mt-8">
                  {testimonial.quote}
                </p>
                <p className="font-semibold text-emerald-600">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Quranic Journey?
          </h2>
          <p className="text-xl mb-10">
            Join thousands of students learning the Quran online with
            QuranConnect
          </p>
          <button className="bg-amber-400 text-emerald-800 font-bold py-4 px-10 rounded-full hover:bg-amber-300 transition duration-300 transform hover:scale-105 shadow-lg text-lg">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">QuranConnect</h3>
              <p className="text-emerald-200">
                Empowering Quranic education worldwide
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 hover:text-amber-400 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 hover:text-amber-400 transition duration-300"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 hover:text-amber-400 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 hover:text-amber-400 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Book Free Trial</h3>
              <p className="text-emerald-200 mb-4">
                Experience our classes for free!
              </p>
              <button className="bg-amber-400 text-emerald-800 font-bold py-2 px-4 rounded-full hover:bg-amber-300 transition duration-300">
                Schedule Now
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <p className="text-emerald-200 mb-2">
                Email: info@quranconnect.com
              </p>
              <p className="text-emerald-200 mb-2">Phone: +92332-8918029</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-emerald-200 hover:text-amber-400 transition duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-amber-400 transition duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-amber-400 transition duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-emerald-200">
            <p>&copy; 2024 QuranConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
