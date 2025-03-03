import React from "react";

interface Course {
  name: string;
  club: string;
  country: string;
  address: string;
}

interface CourseModalProps {
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ selectedCourse, setSelectedCourse }) => {
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2">
        {selectedCourse && (
          <>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              {selectedCourse.name}
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Club:</span> {selectedCourse.club}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Country:</span>{" "}
              {selectedCourse.country}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Address:</span>{" "}
              {selectedCourse.address}
            </p>
          </>
        )}
        <button
          onClick={() => setSelectedCourse(null)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CourseModal;
