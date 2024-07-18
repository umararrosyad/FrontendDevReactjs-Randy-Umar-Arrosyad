// import React from 'react';
import full from "../assets/full.png";
import half from "../assets/half.png";
import empty from "../assets/empty.png";
import PropTypes from "prop-types";

const Card = ({ resto }) => {
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 !== 0; // Check for half star

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={i} className="h-5 w-5" src={full} alt="Full star" />);
    }

    // Add half star if exists
    if (hasHalfStar) {
      stars.push(<img key="half" className="h-5 w-5" src={half} alt="Half star" />);
    }

    // Add empty stars to complete 5 stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty${i}`} className="h-5 w-5" src={empty} alt="Empty star" />);
    }

    return <div className="flex items-center flex-row mb-2">{stars}</div>;
  };

  // Function to determine open or closed status
  const getOpenStatus = (hours) => {
    if (!hours || !hours.timezone) {
      return "Unknown";
    }

    const now = new Date();
    const dayOfWeek = now.getDay();

    const weekRanges = hours.week_ranges;
    if (weekRanges && weekRanges.length > dayOfWeek) {
      const daySchedule = weekRanges[dayOfWeek][0]; // Assume single schedule per day for simplicity
      if (daySchedule) {
        const openTime = daySchedule.open_time;
        const closeTime = daySchedule.close_time;
        const currentTime = now.getHours() * 60 + now.getMinutes();

        if (currentTime >= openTime && currentTime <= closeTime) {
          return "Open Now";
        } else {
          return "Closed";
        }
      }
    }

    return "Unknown";
  };

  // Determine open/close status
  const isOpen = getOpenStatus(resto.hours) === "Open Now";

  return (
    <div className="flex flex-col max-w-sm h-full bg-white">
      <a href="#">
        <img className="h-auto w-full" src={resto.photo.images.small.url} alt="" />
      </a>

      <p className="text-md font-medium font-sans dark:text-gray-800 mt-2 mb-2">{resto.name}</p>

      {/* Render star ratings */}
      {renderStars(resto.rating)}

      <div className="flex items-center flex-row mb-5">
        <p className="text-sm font-medium font-sans dark:text-gray-800">{resto.price ? resto.price : "Not specified"}</p>
        <span className={`flex w-3 h-3 ms-auto me-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}></span>
        <p className="text-sm font-medium font-sans dark:text-gray-800">{isOpen ? "Open Now" : "Closed"}</p>
      </div>

      <button type="button" className="text-white rounded-none mt-auto w-full bg-indigo-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans font-thin text-sm px-5 py-2.5 me-2">
        LEARN MORE
      </button>
    </div>
  );
};

Card.propTypes = {
  resto: PropTypes.object.isRequired
};

export default Card;