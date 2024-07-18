// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { listRestoran } from "../modules/fetch/ListRestoran";

export default function Content() {
  // eslint-disable-next-line no-unused-vars
  const [resto, setResto] = useState();

  useEffect(() => {
      const fetchCard = async () => {
      try {
        const response = await listRestoran();
        setResto(response.results.data);
        console.log(response.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCard();
  }, []);

  return (
    <>
      <div className="mt-8 mx-7">
        <p className="text-3xl mb-5 dark:text-gray-700 font-sans">All Restourant</p>

        <div className="grid grid-cols-4 gap-4 gap-y-8 mt-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="flex items-center flex-row w-full my-10">
          <button type="button" className="rounded-none mx-auto w-sm text-indigo-900 border border-indigo-900 bg-white hover:bg-gray-300  font-sans font-semibold text-sm px-32 py-2.5 ">
            LOAD MORE
          </button>
        </div>
      </div>
    </>
  );
}
