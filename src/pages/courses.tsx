import { useState } from "react";
import CourseList from "./api/CourseList";
import FavoriteCourses from "./api/FavoriteCourse";
import SearchBar from "./api/SearchBar";
import CountryFilter from "./api/CountryFilter";
import CourseModal from "./api/CourseModal";
import hardcodedCourses from "./api/hardCodedCourses";



const Courses = () => {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [favorites, setFavorites] = useState<number[]>(() => {
    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleFavorite = (courseId: number) => {
    const updatedFavorites = favorites.includes(courseId)
      ? favorites.filter((id) => id !== courseId)
      : [...favorites, courseId];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleRemoveFavorite = (courseId: number) => {
    const updatedFavorites = favorites.filter((id) => id !== courseId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredCourses = hardcodedCourses.filter(
    (course) =>
      (course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.club.toLowerCase().includes(search.toLowerCase())) &&
      (selectedCountry === "" || course.country === selectedCountry),
  );

  const favoriteCourses = hardcodedCourses.filter((course) =>
    favorites.includes(course.id),
  );

  const uniqueCountries = [
    ...new Set(hardcodedCourses.map((course) => course.country)),
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
        Golf Courses
      </h1>

      <FavoriteCourses
        favoriteCourses={favoriteCourses}
        handleRemoveFavorite={handleRemoveFavorite}
      />

      <SearchBar search={search} setSearch={setSearch} />

      <CountryFilter
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        uniqueCountries={uniqueCountries}
      />

      <CourseList
        filteredCourses={filteredCourses}
        favorites={favorites}
        handleFavorite={handleFavorite}
        setSelectedCourse={setSelectedCourse}
      />

      {search.length > 0 && filteredCourses.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No courses found.</p>
      )}

      {selectedCourse && (
        <CourseModal
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      )}
    </div>
  );
};

export default Courses;
