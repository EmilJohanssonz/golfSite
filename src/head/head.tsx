import { Link, useLocation } from "react-router-dom";

function HeadBar() {
  const location = useLocation();
  const isCoursesPage = location.pathname === "/courses";

  return (
    <>
      <header className="top-16 left-0 right-0 bg-gradient-to-r from-green-400 to-green-700 text-white py-16 flex flex-col items-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono pt-2">
          Welcome to This Exclusive Golf
        </h1>
        <p className="text-lg md:text-2xl font-mono">Golf For All</p>
        <Link
          to={isCoursesPage ? "/" : "/courses"}
          className="mt-6 px-8 py-4 bg-white text-green-700 font-bold rounded-full shadow-lg hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
        >
          {isCoursesPage ? "Home" : "Courses"}
        </Link>
      </header>
    </>
  );
}

export default HeadBar;
