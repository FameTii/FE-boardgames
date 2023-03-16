import { useEffect, useState } from "react";
import { useNavigate, redirect } from "react-router";

const CategoryDropDown = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    redirectURL();
  }, [category]);

  const redirectURL = () => {
    console.log(category);
    if (category === "") {
      return navigate(`/`);
    } else {
      return navigate(`/categories/${category}`);
    }
  };

  return (
    <div>
      <label>Sort by category </label>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="">show all</option>
        <option value="strategy">strategy</option>
        <option value="hidden-roles">hidden-roles</option>
        <option value="dexterity">dexterity</option>
        <option value="push-your-luck">push-your-luck</option>
        <option value="roll-and-write">roll-and-write</option>
        <option value="deck-building">deck-building</option>
        <option value="engine-building">engine-building</option>
      </select>
    </div>
  );
};
export default CategoryDropDown;
