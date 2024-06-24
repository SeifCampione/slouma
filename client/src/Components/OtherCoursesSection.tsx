// src/components/OtherCoursesSection.jsx

import React from "react";

const OtherCoursesSection = () => {
  return (
    <section className="py-12 bg-lightTheme">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3A387A text-3xl font-bold mb-6">
          Explore More Courses
        </h2>
        <button
          className="hover:bg-3A387A text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-535bf2"
          style={{ backgroundColor: "#3A387A" }}
        >
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default OtherCoursesSection;
