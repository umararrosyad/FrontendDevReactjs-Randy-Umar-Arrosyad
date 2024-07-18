export default function Nav() {
  return (
    <>
      <div className="bg-transparent">
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-row items-center my-3 mx-7">
          <div className="text-md font-normal font-sans text-gray-800 ">Filter By:</div>

          <div className="flex items-center ms-5">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-checkbox" className="ms-3  font-sans text-md font-medium text-gray-800">
              Open Now
            </label>
          </div>

          <form className="ms-5">
            <select id="countries" className="bg-white w-fit text-gray-900 text-md font-sans font-medium focus:ring-blue-500 focus:border-blue-500">
              <option selected>Price Level</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </form>

          <button type="button" className="text-white rounded-none bg-indigo-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans font-thin text-sm ms-auto px-5">
            CLEAR ALL
          </button>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </>
  );
}