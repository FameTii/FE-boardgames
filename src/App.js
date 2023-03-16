import { Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayReviews from "./DisplayReviews";
import Header from "./Header";
import IndividualReview from "./IndividualReview";
import SortBy from "./SortBy";

function App() {
  return (
    <div className="App">
      <Header />
      <SortBy />
      <Routes>
        <Route path="/" element={<DisplayReviews />} />
        <Route path="/review/:reviewId" element={<IndividualReview />} />
      </Routes>
    </div>
  );
}

export default App;
