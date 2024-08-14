'use client'

import React from 'react';
import { FaQuran, FaBookReader, FaMicrophone, FaPray, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

const services = [
  {
    icon: <FaQuran />,
    title: 'Quran Reading & Recitation',
    description: 'Master the art of reading and reciting the Quran with proper pronunciation and rhythm.',
    features: ['Tajweed rules', 'Makharij al-Huruf', 'Proper recitation techniques'],
  },
  {
    icon: <FaBookReader />,
    title: 'Quran Memorization (Hifz)',
    description: 'Commit the entire Quran to memory with our structured and supportive memorization program.',
    features: ['Personalized memorization plans', 'Regular revision sessions', 'Certification upon completion'],
  },
  {
    icon: <FaMicrophone />,
    title: 'Tajweed',
    description: 'Refine your Quranic recitation with our comprehensive Tajweed courses.',
    features: ['In-depth study of Tajweed rules', 'Practical application', 'Recitation improvement'],
  },
  {
    icon: <FaPray />,
    title: 'Islamic Studies',
    description: 'Gain a deeper understanding of Islam with our comprehensive Islamic Studies program.',
    features: ['Fundamentals of Islam', 'Islamic history', 'Contemporary Islamic issues'],
  },
  {
    icon: <FaGraduationCap />,
    title: 'Arabic Language',
    description: 'Learn Classical and Modern Standard Arabic to enhance your understanding of the Quran.',
    features: ['Arabic grammar', 'Vocabulary building', 'Quranic Arabic focus'],
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'One-on-One Tutoring',
    description: 'Get personalized attention and tailored instruction with our one-on-one tutoring sessions.',
    features: ['Customized learning plans', 'Flexible scheduling', 'Expert instructors'],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-100 py-16 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-emerald-500 to-teal-500 transform -skew-y-6 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full opacity-50 transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center text-white mb-16 shadow-text">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:from-emerald-600 hover:to-teal-600 transition duration-300 transform hover:scale-105 shadow-md">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">Ready to Start Your Quranic Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of students learning the Quran online with QuranConnect</p>
          <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-900 font-bold py-3 px-8 rounded-full hover:from-amber-500 hover:to-yellow-600 transition duration-300 transform hover:scale-105 shadow-lg text-lg">
            Book Your Free Trial
          </button>
        </div>
      </div>

      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </main>
  );
}