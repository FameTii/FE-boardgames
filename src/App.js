import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryDropDown from "./CategoryDropDown";
import DisplayReviews from "./DisplayReviews";
import Header from "./Header";
import IndividualReview from "./IndividualReview";
import SortByCategory from "./SortByCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryDropDown />
      <Routes>
        <Route path="/" element={<DisplayReviews />} />
        <Route path="/review/:reviewId" element={<IndividualReview />} />
        <Route path="/categories/:category" element={<SortByCategory />} />
      </Routes>
    </div>
  );
}

export default App;
