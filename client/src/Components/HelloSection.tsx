// src/components/HelloSection.jsx

import React from "react";

const HelloSection = ({ username }) => {
  return (
    <section className="py-12 bg-lightTheme">
      <div className="container mx-auto px-4">
        <h1 className="text-3B49DF text-4xl font-bold mb-4">
          Welcome {username}!
        </h1>
        <p className="text-3A387A text-lg mb-8">
          Happy to see you again. Keep up the good learning!
        </p>
      </div>
    </section>
  );
};

export default HelloSection;
