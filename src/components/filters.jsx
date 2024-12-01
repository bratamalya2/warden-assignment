import { useState } from "react";

import Search from "../assets/search.png";
import Sort from "../assets/sort.png";
import Filter from "../assets/filter.png";
import DownArrow from "../assets/down-arrow.png";

export default function Filters() {
    const [showProperties, setShowProperties] = useState(false);
    const [showSortedBy, setShowSortedBy] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    return <>
        <div className="hidden mt-[30px] w-full md:flex flex-row flex-nowrap items-center justify-between">
            <button className="px-5 py-3 bg-green-700 text-white font-medium rounded-lg">+ Add</button>
            <div className="flex flex-row flex-nowrap items-center justify-between gap-x-[10px]">
                <div className="px-5 py-3 bg-gray-100 text-gray-300 rounded-lg hover:cursor-pointer">
                    Check In Month
                </div>
                <div className="relative px-5 py-3 bg-gray-100 text-black rounded-lg hover:cursor-pointer flex flex-row flex-nowrap items-center" onClick={() => {
                    setShowProperties(x => !x);
                }}>
                    All Properties
                    <img src={DownArrow} alt="arrow" className="ml-2 w-[15px] h-[12px]" />
                    {
                        showProperties && (
                            <div className="absolute left-0 top-[55px] w-[157px] flex flex-col rounded-lg">
                                <div className="px-5 py-2 bg-gray-100 text-black hover:bg-black hover:text-white">
                                    Lorem Ipsum
                                </div>
                                <div className="px-5 py-2 bg-gray-100 text-black hover:bg-black hover:text-white">
                                    Lorem Ipsum x2
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="relative px-5 py-1 bg-gray-100 text-black rounded-lg hover:cursor-pointer flex flex-col flex-nowrap" onClick={() => {
                    setShowSortedBy(x => !x);
                }}>
                    <p className="text-sm">Sorted by</p>
                    <p className="font-semibold">Newest</p>
                    {
                        showSortedBy && (
                            <div className="absolute left-0 top-[55px] w-[105px] flex flex-col rounded-lg">
                                <div className="px-5 py-2 bg-gray-100 text-black hover:bg-black hover:text-white">
                                    Newest
                                </div>
                                <div className="px-5 py-2 bg-gray-100 text-black hover:bg-black hover:text-white">
                                    Oldest
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="relative px-5 py-3 bg-gray-100 text-black rounded-lg hover:cursor-pointer flex flex-row flex-nowrap items-center" onClick={() => {
                    setShowFilters(x => !x);
                }}>
                    Filters
                    <img src={DownArrow} alt="arrow" className="ml-2 w-[15px] h-[12px]" />
                    {
                        showFilters && (
                            <div className="absolute left-0 top-[55px] w-[105px] flex flex-col rounded-lg">
                                <div className="px-5 py-2 bg-gray-100 text-black hover:bg-black hover:text-white">
                                    Lorem Ipsum
                                </div>
                                <div className="px-5 py-2 bg-gray-100 text-black hover:bg-black hover:text-white">
                                    Lorem Ipsum x2
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        <div className="flex mt-[30px] w-full md:hidden flex-row flex-nowrap items-center justify-between">
            <button className="px-5 py-3 bg-green-700 text-white font-medium rounded-lg">+ Add</button>
            <div className="flex flex-row flex-nowrap items-center gap-x-[10px]">
                <div className="bg-gray-100 rounded-lg p-2">
                    <img src={Search} alt="search" className="w-[25px] h-[22px]" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2">
                    <img src={Sort} alt="sort" className="w-[25px] h-[22px]" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2">
                    <img src={Filter} alt="filter" className="w-[25px] h-[22px]" />
                </div>
            </div>
        </div>
    </>
}