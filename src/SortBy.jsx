import { getReviews } from "./Api";
import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByQuery = searchParams.get("sort_by");

  return (
    <div>
      <label>Filter by:</label>
      <select
        onChange={(e) => {
          setSearchParams(e.target.value);
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("sort_by", e.target.value);
          setSearchParams(newSearchParams);
        }}
      >
        <option value="">
          Show all
        </option>
        <option value="review_id">review id</option>
        <option value="votes">votes</option>
        <option value="created_at">created at</option>
      </select>

      <label>Sort by</label>
      <select
        onChange={(e) => {
          setSearchParams(e.target.value);
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("orderBy", e.target.value);
          setSearchParams(newSearchParams);
        }}
      >
        <option default value=""></option>
        <option value="DESC">high to low</option>
        <option value="ASC">low to high</option>
      </select>
    </div>
  );
};

export default SortBy;
