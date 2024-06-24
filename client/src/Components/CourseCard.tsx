// src/components/CourseCard.jsx

import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-3A387A hover:bg-3A387A cursor-pointer">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-3A387A">{course.title}</h3>
        <p className="text-gray-700">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
