import { Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayReviews from "./DisplayReviews";
import Header from "./Header";
import IndividualReview from "./IndividualReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DisplayReviews />} />
        <Route path="/review/:reviewId" element={<IndividualReview />} />
        <Route path="/categories/:category" element={<DisplayReviews />} />
      </Routes>
    </div>
  );
}

export default App;
