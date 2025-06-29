import { Users } from "lucide-react"; // adjust imports based on your setup
import Image from "next/image";

import React from "react";

const Team = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full text-sm font-medium text-orange-700 mb-6">
          <Users className="w-4 h-4" />
          Meet Our Team
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The People Behind{" "}
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Our Success
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Meet the passionate individuals who drive our company forward with
          their expertise, creativity, and dedication to delivering exceptional
          results.
        </p>
      </div>

      {/* Founder & Co-Founder Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-center max-w-4xl mx-auto">
        {/* Founder */}
        <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/img2.jpeg"
                  alt="Jane Smith"
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                  width={96}
                  height={96}
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Founder
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-gray-900">John Doe</h3>
            <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Visionary leader with 15+ years in tech. Passionate about
              innovation and building solutions that make a difference.
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                Leadership
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                Strategy
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Innovation
              </span>
            </div>
          </div>
        </div>

        {/* Co-Founder */}
        <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500 to-teal-600 p-1 group-hover:scale-105 transition-transform duration-300">
               <Image
                  src="/images/img1.jpeg"
                  alt="Jane Smith"
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                  width={96}
                  height={96}
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Co-Founder
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-gray-900">Jane Smith</h3>
            <p className="text-green-600 font-semibold mb-4">
              Co-Founder & CTO
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tech enthusiast and problem solver. Leads our technical vision and
              ensures we deliver cutting-edge solutions.
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Architecture
              </span>
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                DevOps
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
