import { useEffect, useState } from "react";
import SortBy from "./sortBy";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryDropDown = () => {
  // const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const redirectURL = (e) => {
    if (e.target.value === "all") {
      navigate({ pathname: "/", search: `?${searchParams}` });
    }
    if (e.target.value !== "all") {
      navigate({
        pathname: `/categories/${e.target.value}`,
        search: `?${searchParams}`,
      });
    }
  };

  return (
    <div>
      <label>Sort by category </label>
      <select
        onChange={(e) => {
          setSearchParams(e.target.value);
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("category", e.target.value);
          setSearchParams(newSearchParams);
        }}
        // value={category}
      >
        <option value="all">show all</option>
        <option value="strategy">strategy</option>
        <option value="hidden-roles">hidden-roles</option>
        <option value="dexterity">dexterity</option>
        <option value="push-your-luck">push-your-luck</option>
        <option value="roll-and-write">roll-and-write</option>
        <option value="deck-building">deck-building</option>
        <option value="engine-building">engine-building</option>
      </select>
      <SortBy />
    </div>
  );
};
export default CategoryDropDown;
