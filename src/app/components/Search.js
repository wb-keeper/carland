import React, { useContext } from "react";
import { SearchContext } from "@/app/context/search";
import LocationSelection from "@/app/components/LocationSelection";
import DateSelection from "@/app/components/DateSelection";
import HoursSelection from "@/app/components/HoursSelection";

function Search(props) {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg `}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-lg btn-accent xl:w-[184px]"
            } `}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
