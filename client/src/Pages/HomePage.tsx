// src/pages/HomePage.jsx

import React from "react";
import HelloSection from "../Components/HelloSection";
import CoursesSection from "../Components/CoursesSection";
import CourseCard from "../Components/CourseCard";
import OtherCoursesSection from "../Components/OtherCoursesSection";
import Navbar from "../Components/Navbar";

const courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    description:
      "Learn the fundamentals of programming with this beginner-friendly course.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Become a full-stack web developer in just 12 weeks!",
    image: "https://via.placeholder.com/300x200",
  },
  // Add more courses as needed
];

const HomePage = () => {
  const username = "User"; // Replace with actual username

  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <HelloSection username={username} />
      <CoursesSection>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </CoursesSection>
      <OtherCoursesSection />
    </div>
  );
};

export default HomePage;
