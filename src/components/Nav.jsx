import { useSelector, useDispatch } from "react-redux";
import { switchCheck , switchLevel} from "../store/reducers/Restoaran";

export default function Nav() {
  // const [openNowChecked, setOpenNowChecked] = useState(false);

  const dispatch = useDispatch();
  const openNowChecked = useSelector((state) => state.restauran.check);

  const priceLevel = useSelector((state) => state.restauran.level);

  const handleOpenNowChange = () => {
    dispatch(switchCheck(!openNowChecked));
  };

  const handlePriceLevelChange = (event) => {
    dispatch(switchLevel(event.target.value));
  };

  const handleClick = () => {
    dispatch(switchLevel(""));
    dispatch(switchCheck(false));
  };

  return (
    <>
      <div className="bg-transparent">
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-row items-center my-3 mx-7">
          <div className="text-md font-normal font-sans text-gray-800 ">Filter By:</div>

          <div className="flex items-center ms-5">
            <input
              id="open-now-checkbox"
              type="checkbox"
              checked={openNowChecked}
              onChange={handleOpenNowChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="open-now-checkbox" className="ms-3  font-sans text-md font-medium text-gray-800">
              Open Now
            </label>
          </div>

          <form className="ms-5">
            <select
              id="price-level"
              value={priceLevel}
              onChange={handlePriceLevelChange}
              className="bg-white w-fit text-gray-900 text-md font-sans font-medium focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Price Level</option>
              <option value="$">$ - Budget</option>
              <option value="$$">$$ - Moderate</option>
              <option value="$$$">$$$ - Expensive</option>
              <option value="$$$$">$$$$ - Luxury</option>
            </select>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </form>

          <button type="button" onClick={handleClick} className="text-white rounded-none bg-indigo-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans font-thin text-sm ms-auto px-5">
            CLEAR ALL
          </button>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </>
  );
}
