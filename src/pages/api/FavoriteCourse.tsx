import React from "react";

interface Course {
  id: number;
  name: string;
  club: string;
  country: string;
  address: string;
}

interface FavoriteCoursesProps {
  favoriteCourses: Course[];
  handleRemoveFavorite: (id: number) => void;
}

const FavoriteCourses: React.FC<FavoriteCoursesProps> = ({ favoriteCourses, handleRemoveFavorite }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4 text-green-600">
        Favorite Courses
      </h2>
      {favoriteCourses.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {favoriteCourses.map((course) => (
            <li
              key={course.id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-green-700">
                  {course.name}
                </h2>
                <button
                  onClick={() => handleRemoveFavorite(course.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  Remove Favorite
                </button>
              </div>
              <p className="text-lg text-gray-700">Club: {course.club}</p>
              <p className="text-lg text-gray-700">Country: {course.country}</p>
              <p className="text-lg text-gray-700">Address: {course.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No favorites yet.</p>
      )}
    </>
  );
};

export default FavoriteCourses;
