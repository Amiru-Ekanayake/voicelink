import React from 'react';

export default function CtaSection() {
  return (
    <section className="bg-blue-600 py-16 md:py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Transform Your Feedback Process?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join hundreds of organizations prioritizing community needs with VoiceLink's intelligent platform.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition duration-200 shadow-xl transform hover:scale-[1.05]">
            Get Started Today
          </button>
          <button className="px-8 py-3 border border-white text-white font-medium rounded-xl hover:bg-blue-700 transition duration-200">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
