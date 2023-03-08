import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { apiNoToken } from "../../config/api/apiNoToken";
import _ from "lodash";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const debouncedSearch = _.debounce(searchContent, 500); // debounce de 500ms

  useEffect(() => {
    if (search !== "") {
      debouncedSearch();
    } else {
      setResults([]);
    }
  }, [search]);

  async function searchContent() {
    try {
      const response = await apiNoToken.get(`/searchbar/${search}`);
      setResults(response.data);
    } catch (error) {
      console.log(error);
      setResults([]);
    }
  }

  return (
    <>
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className=" flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-black opacity-30 -z-30"
        ></motion.div>
      )}

      <div className="flex flex-col  md:right-40 top-1 w-36 sm:w-60 z-10">
        <div className="w-28 sm:w-44 absolute">
          <label
            htmlFor="searchBar"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-emerald-600"
          >
            <input
              type="searchBar"
              id="searchBar"
              placeholder="searchBar"
              className="text-slate-100 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={(e) => setSearch(e.target.value.replaceAll(" ", "%20"))}
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-emerald-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-emerald-600 peer-focus:text-emerald-800 peer-focus:top-2 peer-focus:text-xs">
              <p>Search</p>
            </span>
          </label>
        </div>
        <div className="flex flex-col h-auto mt-16 w-60 gap-2">
          {results.length > 0 &&
            results.map((currentElement) => {
              return <h1>{currentElement.title}</h1>;
            })}
        </div>
      </div>
    </>
  );
}
