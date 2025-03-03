import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blogg from "./blogg/blogg";
import Footer from "./footer/footer";
import HeadBar from "./head/head";
import HeroImg from "./hero/hero";
import Nav from "./nav/nav";
import Shop from "./widgets/shop/shop";
import Courses from "./pages/courses"; 

function App() {
  return (
    <Router>
      <Nav />
      <HeadBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Blogg />
              <HeroImg />
              <Shop />
            </>
          }
        />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
