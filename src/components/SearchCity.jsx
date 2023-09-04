import React from "react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../store/actions/Cities";

export default function SearchCity() {
  let citiesFilteredInStore = useSelector(
    (store) => store.citiesReducer.cityFiltered
  );
  const inputSearch = useRef(null);
  const dispatch = useDispatch();
  const handleInput = () => {
    dispatch(
      citiesActions.add_city_filtered(
        citiesFilteredInStore,
        inputSearch.current.value
      )
    );
  };
  return (
    <div className="flex justify-center gap-3 h-10 m-10 ">
      <input
        type="text"
        placeholder="Search your dream city!"
        className="input input-bordered input-primary w-full max-w-xs"
        ref={inputSearch}
      />
      <div className="self-center">
        <button className="btn" onClick={handleInput}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
