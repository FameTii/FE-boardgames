import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="sortBox">
      <div className="childSortBox">
        <label>Category: </label>
        <select
          onChange={(e) => {
            setSearchParams(e.target.value);
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("category", e.target.value);
            setSearchParams(newSearchParams);
          }}
        >
          <option value="all">Show all</option>
          <option value="strategy">strategy</option>
          <option value="hidden-roles">hidden-roles</option>
          <option value="dexterity">dexterity</option>
          <option value="push-your-luck">push-your-luck</option>
          <option value="roll-and-write">roll-and-write</option>
          <option value="deck-building">deck-building</option>
          <option value="engine-building">engine-building</option>
        </select>
      </div>

      <div className="childSortBox">
        <label>Sort by: </label>
        <select
          onChange={(e) => {
            setSearchParams(e.target.value);
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("sort_by", e.target.value);
            setSearchParams(newSearchParams);
          }}
        >
          <option value="">Show all</option>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
          <option value="created_at">created at</option>
        </select>
      </div>

      <div className="childSortBox">
        <label>Order by: </label>
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
    </div>
  );
};

export default SortBy;
