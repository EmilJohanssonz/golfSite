import React from "react";

interface Course {
  id: number;
  name: string;
  club: string;
  country: string;
  address: string;
}

interface CourseListProps {
  filteredCourses: Course[];
  favorites: number[];
  handleFavorite: (id: number) => void;
  setSelectedCourse: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({
  filteredCourses,
  favorites,
  handleFavorite,
  setSelectedCourse,
}) => {
  return (
    <ul className="space-y-4">
      {filteredCourses.map((course) => (
        <li
          key={course.id}
          className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-green-700">
              {course.name}
            </h2>
            <button
              onClick={() => handleFavorite(course.id)}
              className={`${
                favorites.includes(course.id)
                  ? "text-red-500 hover:text-red-700"
                  : "text-gray-500 hover:text-gray-700"
              } transition-colors`}
            >
              {favorites.includes(course.id)
                ? "Remove Favorite"
                : "Add Favorite"}
            </button>
          </div>
          <p className="text-lg text-gray-700">Club: {course.club}</p>
          <p className="text-lg text-gray-700">Country: {course.country}</p>
          <p className="text-lg text-gray-700">Address: {course.address}</p>
          <button
            onClick={() => setSelectedCourse(course)}
            className="mt-2 text-green-500 hover:text-green-700 transition-colors"
          >
            View Details
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
