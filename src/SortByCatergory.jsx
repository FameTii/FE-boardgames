import { useEffect, useState } from "react";
import { getReviews } from "./Api";

const SortByCatergory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getReviews().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <select
      value={selectedCategory}
      onChange={(event) => selectedCategory(event.target.value)}
    >
      <option value="review_id">Review id</option>
      <option value="created_at">Created at</option>
      <option value="votes">Votes</option>
    </select>
  );
};

export default SortByCatergory;
