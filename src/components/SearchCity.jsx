import React from "react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../store/actions/Cities";

export default function SearchCity() {
  const inputSearch = useRef(null);
  const dispatch = useDispatch();
  const handlerInput = () => {
    dispatch(citiesActions.add_city_filtered(inputSearch.current.value));
  };
  return (
    <div className="flex justify-center gap-3 h-10 mt-10 ">
      <input
        type="search"
        placeholder="Search your dream city!"
        className="md:w-2/3 lg:border-2 p-2 border-gray-500 rounded-md focus:border-blue-400 w-1/4 focus:ring-blue-400"
        ref={inputSearch}
        onInput={handlerInput}
      />
      <div className="self-center">
        <button className="btn">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
