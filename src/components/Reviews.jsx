/* eslint-disable no-unused-vars */
// import React from 'react';
import full from "../assets/full.png";
import half from "../assets/half.png";
import empty from "../assets/empty.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { listRestoran } from "../modules/fetch/ListRestoran";
import React, { useEffect, useState } from "react";

const Reviews = ({ review }) => {
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

  return (
    <>
      <div className="flex flex-col mt-4 px-5 ">
        <div className="flex flex-row items-center">
          <img className="w-10 h-10 rounded-full" src={review.user.avatar.large.url} alt="Rounded avatar"></img>
          <p className="text-xl ms-2 me-5 font-medium font-sans dark:text-gray-800">{review.user.name ? review.user.name : "anonim"}</p>
          {renderStars(review.rating)}
        </div>
        <p className="mt-3 text-md font-normal font-sans dark:text-gray-700">{review.text}</p>

        {review?.photos?.length > 0 ? (
          <div className="grid grid-cols-8 gap-4 my-3">
            {review.photos.map((photo) => (
              <img key={photo.id} className="h-auto rounded-sm w-full" src={photo?.images?.small?.url} alt="Review Image" />
            ))}
          </div>
        ) : (
          <p>No images available</p>
        )}
      </div>
    </>
  );
};

Reviews.propTypes = {
  review: PropTypes.object.isRequired
};

export default Reviews;
