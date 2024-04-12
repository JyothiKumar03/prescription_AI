import React from "react";
import DoctorCard from "./DoctorCard"; // Adjust the path based on your project structure

const DoctorsList = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      designation: "Cardiologist",
      image: "", // Replace with the actual image source
      contactButton: "Contact",
      chatButton: "Chat",
    },
    {
      name: "Dr. Jane Smith",
      designation: "Pediatrician",
      image: "", // Replace with the actual image source
      contactButton: "Contact",
      chatButton: "Chat",
    },
    // Add more doctors as needed
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-orange-400 text-white py-4 text-center rounded-md">
        <h1 className="text-2xl font-semibold rounded-md">Available Doctors</h1>
      </header>

      {/* Doctor Cards */}
      <div className="container mx-auto mt-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
