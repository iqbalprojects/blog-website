import React from "react";
import Magnify from "./Icons/Magnify";

const Search = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="searchBar" className="relative">
                    <Magnify className="absolute right-3 bottom-0" />
                    <input
                        type="text"
                        name="searchBar"
                        id=""
                        placeholder="Search..."
                        className="bg-[#F5F5F5] px-3 h-10 rounded-lg text-black"
                    />
                </label>
            </form>
        </div>
    );
};

export default Search;
