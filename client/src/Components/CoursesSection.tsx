// src/components/CoursesSection.jsx

import React from "react";

const CoursesSection = ({ children }) => {
  return (
    <section className="py-12 bg-lightTheme">
      <div className="container mx-auto px-4">
        <h2 className="text-3B49DF text-4xl font-bold mb-8 text-center">
          My Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
