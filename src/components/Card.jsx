
import full from "../assets/full.png";
import half from "../assets/half.png";
import empty from "../assets/empty.png";

export default function Card(){
    return(
        <>
        <div className="max-w-sm ">
                <a href="#">
                  <img className="" src="https://via.placeholder.com/400x300" alt="" />
                </a>

                <p className=" text-md font-medium font-sans dark:text-gray-800 mt-2 mb-2 ">Nama restoran</p>

                <div className="flex items-center flex-row mb-2">
                  <a>
                    <img className="h-5 w-5" src={full} alt="" />
                  </a>
                  <a>
                    <img className="h-5 w-5" src={full} alt="" />
                  </a>
                  <a>
                    <img className="h-5 w-5" src={full} alt="" />
                  </a>
                  <a>
                    <img className="h-5 w-5" src={half} alt="" />
                  </a>
                  <a>
                    <img className="h-5 w-5" src={empty} alt="" />
                  </a>
                </div>
                <div className="flex items-center flex-row mb-2">
                  <p className=" text-md font-medium font-sans dark:text-gray-800 ">$15 - $222</p>
                  <span className="flex w-3 h-3 ms-auto me-2 bg-green-500 rounded-full"></span>
                  <p className="text-md font-medium font-sans dark:text-gray-800 ">Open Now</p>
                </div>
                <button type="button" className="text-white rounded-none w-full bg-indigo-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans font-thin text-sm px-5 py-2.5 me-2 mb-2 ">
                  LEARN MORE
                </button>
              </div>
        </>
    )
}