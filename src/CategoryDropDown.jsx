// import SortBy from "./SortBy";
// import { useSearchParams } from "react-router-dom";

// const CategoryDropDown = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   return (
//     <div className="sortBox">
//       <label>Category: </label>
//       <select
//         onChange={(e) => {
//           setSearchParams(e.target.value);
//           const newSearchParams = new URLSearchParams(searchParams);
//           newSearchParams.set("category", e.target.value);
//           setSearchParams(newSearchParams);
//         }}
//       >
//         <option value="all">Show all</option>
//         <option value="strategy">strategy</option>
//         <option value="hidden-roles">hidden-roles</option>
//         <option value="dexterity">dexterity</option>
//         <option value="push-your-luck">push-your-luck</option>
//         <option value="roll-and-write">roll-and-write</option>
//         <option value="deck-building">deck-building</option>
//         <option value="engine-building">engine-building</option>
//       </select>
//       <SortBy />
//     </div>
//   );
// };
// export default CategoryDropDown;
