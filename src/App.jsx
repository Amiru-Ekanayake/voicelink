import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./Pages/Home/Hero";
import Cards from "./components/Cards/Cards";
import BottomNav from "./components/BottomNav";
import FeaturesSection from "./Pages/Home/Feature";
import CtaSection from "./Pages/Home/CTA";
import StatsSection from "./Pages/Home/Stats";
import FooterSection from "./components/Footer";
import Feedback from "./Pages/Feedback";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <img
                className="absolute top-0 right-0 opacity-100 -z-1"
                src="/gradient.png"
                alt="Gradient-img"
              />
              <div className="h-0 w-[150rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#0022ff] -rotate-[0] -z-10"></div>
              <FeaturesSection />
              <CtaSection />
              <StatsSection />
              <BottomNav />
              <FooterSection />
            </main>
          }
        />

        {/* 📝 Feedback Page */}
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
