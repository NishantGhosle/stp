import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  HomeThree,
  AboutTwo,
  Career,
  Contact,
  Services,
  PageNotFound,
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
function App() {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen pb-40"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <Routes>
          <Route path="/home" element={<HomeThree />} />
          <Route path="/" element={<HomeThree />} />
          <Route path="/about" element={<AboutTwo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <div className="mt-20">
          <Footer />
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;
