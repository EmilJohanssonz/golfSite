// const API_URL = "https://golf-course-finder.p.rapidapi.com/api/golf-clubs";
// const API_KEY = import.meta.env.VITE_GOLF_API_KEY;

// export const fetchGolfCourses = async (searchTerm: string) => {
//   const url = `${API_URL}/?name=${encodeURIComponent(searchTerm)}`;

//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": API_KEY,
//       "X-RapidAPI-Host": "golf-course-finder.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data.golfClubs || [];
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     return [];
//   }
// };
