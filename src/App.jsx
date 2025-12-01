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
import UserDashboard from "./Pages/UserDash/Userdash";
import VoiceLinkLoginPage from "./Pages/Login";
import TrackFeed from "./Pages/Trackfeed";
import Userheader from "./components/Userheader";
import AchievementsPage from "./Pages/Achievements";
import AdminDashboard from "./Pages/AdminDash/Admindash";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import ChatBot from "./components/chatbot";



function App() {
  return (
    <Router>
      <Userheader />
      <Routes>
        
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
              <ChatBot />
              {/* <BottomNav /> */}
              <FooterSection />
            </main>
          }
        />

        
        <Route path="/feedback" element={<Feedback />} />
        
       
        <Route path="/user-dashboard" element={<UserDashboard />} />

        <Route path="/login" element={<VoiceLinkLoginPage />} />  

        <Route path="/track-feedback" element={<TrackFeed />} />

        <Route path="/achievements" element={<AchievementsPage />} />

        <Route path="/achievements" element={<AchievementsPage />} />

        <Route path="/feedback" element={<Feedback />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/signup" element={<SignupPage />} />
        
        <Route path="/login" element={<LoginPage />} />
        


      </Routes>
    </Router>
  );
}

export default App;
