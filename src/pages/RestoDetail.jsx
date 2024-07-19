/* eslint-disable no-unused-vars */
// import Nav from "../components/Nav";
// import Content from "../components/Content";
// import React from 'react';

import full from "../assets/full.png";
import half from "../assets/half.png";
import empty from "../assets/empty.png";
import Reviews from "../components/Reviews";
import { useLocation } from "react-router-dom";

import { listReviws } from "../modules/fetch/ListRestoran";
import React, { useEffect, useState } from "react";


export default function RestoDetail() {
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const { resto } = location.state || {};
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await listReviws(resto.location_id);
        setReviews(response.results.data);
        console.log(response.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCard();
  }, [resto.location_id]);

  
  if (!resto) {
    return <div>Restoran tidak ditemukan</div>;
  }
  
 

 

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
    <>
      <div className="">
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="border rounded-sm  border-gray-800 flex flex-row mx-7 mt-10">
          <div className="basis-1/3">
            <a href="#">
              <img className="h-auto w-full" src={resto.photo.images.original.url} alt="" />
            </a>
          </div>
          <div className="ms-10 basis-2/3">
            <div className="flex flex-row items-center">
              <p className="text-2xl font-medium font-sans dark:text-gray-800 mt-2 mb-2">{resto.name}</p>
              <span className={`flex w-4 h-4  ms-auto me-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}></span>
              <p className="text-xl font-medium me-8 font-sans dark:text-gray-800">{isOpen ? "Open Now" : "Closed"}</p>
              {/* Render star ratings */}
              {/* <div className="flex items-center flex-row mb-5">
                
              </div> */}
            </div>
            {renderStars(resto.rating)}

            <p className="text-md font-medium font-sans dark:text-gray-800">{resto.price ? resto.price : "Not specified"}</p>
            <p className="text-md font-medium mt-2 font-sans dark:text-gray-800">Description :</p>
            <p className="text-sm font-normal ms-3 me-5 font-sans dark:text-gray-600">{resto.description}</p>
          </div>
        </div>
        <div className="bg-indigo-900 mx-7 p-2 ">
          <p className="text-xl font-medium ms-2 font-sans text-white">Reviews</p>
        </div>
        <div className="mx-7">
        {reviews
            .map((review) => (
              <>
              <Reviews key={review.location_id} review={review} />
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" /> 
              </>
               
            ))}
          
        </div>
      </div>
    </>
  );
}
