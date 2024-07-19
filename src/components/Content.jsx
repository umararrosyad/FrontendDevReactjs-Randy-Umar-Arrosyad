/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { listRestoran } from "../modules/fetch/ListRestoran";
import { useSelector, useDispatch } from "react-redux";
import { fillRestauran, setLoading} from "../store/reducers/Restoaran";

export default function Content() {
  const [resto, setResto] = useState([]);
  const [item, setItem] = useState(8); // State untuk menyimpan jumlah item yang ditampilkan
  const [loadMoreText, setLoadMoreText] = useState("LOAD MORE");
//   const [openNowChecked, setOpenNowChecked] = useState(false); // State untuk filter Open Now

  const dispatch = useDispatch();
  const openNowChecked = useSelector((state) => state.restauran.check);
  const priceLevel = useSelector((state) => state.restauran.level);
  const loading = useSelector((state) => state.restauran.loading);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        dispatch(setLoading(true));
        const response = await listRestoran();
        dispatch(fillRestauran(response.results.data));
        setResto(response.results.data);
        console.log(response.results);
        // console.log(restoran);
      } catch (e) {
        console.log(e);
      } finally{
        dispatch(setLoading(false));
      }
    };
    fetchCard();
  }, [dispatch]);

  // Fungsi untuk menambah jumlah item yang ditampilkan
  const handleLoadMore = () => {
    setItem(item + 4); // Menambah 4 item setiap kali tombol diklik
    if (item + 4 >= resto.length) {
      setLoadMoreText("NO MORE DATA"); // Ubah teks tombol jika tidak ada lagi data
    }
  };

  // Fungsi untuk mengecek apakah restoran buka saat ini berdasarkan jam
  const isOpenNow = (hours) => {
    if (!hours) return false; // Jika data hours tidak ada, anggap tidak buka
    const now = new Date();
    const currentHour = now.getHours() * 60 + now.getMinutes(); // Menghitung waktu saat ini dalam menit

    // Loop melalui week_ranges untuk mencari range waktu yang sesuai
    for (let i = 0; i < hours.week_ranges.length; i++) {
      const openTime = hours.week_ranges[i][0].open_time;
      const closeTime = hours.week_ranges[i][0].close_time;

      // Jika currentHour berada di antara openTime dan closeTime, restoran buka
      if (currentHour >= openTime && currentHour <= closeTime) {
        return true;
      }
    }
    return false; // Jika tidak ada range waktu yang sesuai, restoran tidak buka
  };

  const isPriceLevelMatch = (restaurantPriceLevel, selectedPriceLevel) => {
    if (!selectedPriceLevel) return true; // Jika tidak ada level harga yang dipilih, tampilkan semua
    if (!restaurantPriceLevel) return false; // Jika tidak ada level harga di data restoran, anggap tidak cocok

    const levels = restaurantPriceLevel.split(" - ");
    if (levels.length === 1) {
      return levels[0] === selectedPriceLevel;
    } else if (levels.length === 2) {
      const minLevel = levels[0].length;
      const maxLevel = levels[1].length;
      const selectedLevel = selectedPriceLevel.length;
      return selectedLevel >= minLevel && selectedLevel <= maxLevel;
    }
    return false;
  };

  return (
    <>
      <div className="mt-8 mx-7">
        <p className="text-3xl mb-5 dark:text-gray-700 font-sans">All Restourant</p>

        <div className="grid-container grid grid-cols-4 gap-5 gap-y-8 mt-8">
          {resto
            ?.slice(0, item)
            .filter((rest) => !openNowChecked || isOpenNow(rest.hours)) // Filter berdasarkan Open Now jika checkbox dicentang
            .filter((rest) => isPriceLevelMatch(rest.price_level, priceLevel)) 
            .map((rest) => (
              <Card key={rest.location_id} resto={rest} />  
            ))}
        </div>

        <div className="flex items-center flex-row w-full my-10">
          <button
            type="button"
            className="rounded-none mx-auto w-sm text-indigo-900 border border-indigo-900 bg-white hover:bg-gray-300  font-sans font-semibold text-sm px-32 py-2.5"
            onClick={handleLoadMore}
            disabled={item >= resto.length} // Menonaktifkan tombol jika semua data sudah ditampilkan
          >
            {loadMoreText}
          </button>
        </div>
      </div>
    </>
  );
}