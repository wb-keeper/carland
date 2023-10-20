import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "Main Street 123, United States",
  "Business Avenue 456, United Kingdom",
  "Park Road 789, Canada",
];

function LocationSelection(props) {
  const [location, setLocation] = useState("Select Location");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[15px] uppercase font-bold">
                  Select Location
                </div>
              </div>
              <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items>Menu Items</Menu.Items>
      </div>
    </Menu>
  );
}

export default LocationSelection;
