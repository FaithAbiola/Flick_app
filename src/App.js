import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home-page/Home";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;