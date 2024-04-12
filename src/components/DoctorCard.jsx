import React from "react";

const DoctorCard = ({ doctor }) => {
  const { name, designation, image, contactButton, chatButton } = doctor;

  return (
    <div className="bg-white w-full mb-4 p-4 rounded-md shadow-md flex items-center">
      <div className="w-1/4 mr-4">
        <img
          src={image}
          alt={`Dr. ${name}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-gray-500">{designation}</div>
      </div>
      <div className="flex items-center">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
          {contactButton}
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          {chatButton}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
