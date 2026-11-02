import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import WhyInternzLearn from './components/WhyInternzLearn';
import FlagshipProgram from './components/FlagshipProgram';
import ExploreDomains from './components/ExploreDomains';
import HowItWorks from './components/HowItWorks';
import StudentSuccessStories from './components/StudentSuccessStories';
import AlumniCompanies from './components/AlumniCompanies';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';


import TechCareerPackSelection from './components/TechCareerPack';
import CodersPackSelection from './pages/CodersPackSelection';
import FinancialAnalystPackSelection from './pages/FinancialAnalystPackSelection';
import MedicalPackSelection from './pages/MedicalPackSelection';
import StartupPackSelection from './pages/StartupPackSelection';
import NewAgeTechPackSelection from './pages/NewAgeTechPackSelection';
import NewAgeMarketingPackSelection from './pages/NewAgeMarketingPackSelection';
import DesignPackSelection from './pages/DesignPackSelection';
import CareerPacksSection from './components/CareerPacksSection';
import SocialSidebar from './components/SocialSidebar';
import AccreditationPopup from './components/AccreditationPopup';

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import MachineLearning from './pages/MachineLearning';
import ProgramTemplate from './pages/ProgramTemplate';
import Learner from './pages/Learner';
import CampusAmbassador from './pages/CampusAmbassador';
import Instructor from './pages/Instructor';
import AboutUs from './pages/AboutUs';
import CloudComputing from './pages/CloudComputing';
import AutoCAD from './pages/AutoCAD';
import VLSI from './pages/VLSI';
import BusinessCommunication from './pages/BusinessCommunication';
import CareerPackTemplate from './pages/CareerPackTemplate';
import MakeYourOwnPack from './pages/MakeYourOwnPack';
import DigitalMarketingOffline from './pages/DigitalMarketingOffline';
import PaymentAndRefundPolicy from './pages/PaymentAndRefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
import Enroll from './pages/Enroll';
import PayRemaining from './pages/PayRemaining';
import ResumeBuilder from './pages/ResumeBuilder';
import ResumeEnroll from './pages/ResumeEnroll';
import PlacementReadinessPage from './pages/PlacementReadinessPage';
import StudentChatbot from './components/Chatbot/StudentChatbot';
import RegistrationForm from './components/RegistrationForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-darkMainBg">
      <ScrollToTop />
      <Navbar />
      <SocialSidebar />
      <AccreditationPopup />
      <StudentChatbot />
      <Routes>
        <Route path="/career-pack/tech-career-pack" element={<TechCareerPackSelection />} />
        <Route path="/tech-career-pack" element={<TechCareerPackSelection />} />
        <Route path="/career-pack/:packId" element={<CareerPackTemplate />} />
        <Route path="/career-pack/coders-pack" element={<CodersPackSelection />} />
        <Route path="/career-pack/financial-analyst-pack" element={<FinancialAnalystPackSelection />} />
        <Route path="/career-pack/medical-pack" element={<MedicalPackSelection />} />
        <Route path="/career-pack/startup-pack" element={<StartupPackSelection />} />
        <Route path="/career-pack/new-age-technology" element={<NewAgeTechPackSelection />} />
        <Route path="/career-pack/new-age-marketing" element={<NewAgeMarketingPackSelection />} />
        <Route path="/career-pack/design-pack" element={<DesignPackSelection />} />


        <Route path="/program/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/program/machine-learning" element={<MachineLearning />} />
        <Route path="/program/cloud-computing" element={<CloudComputing />} />
        <Route path="/program/autocad" element={<AutoCAD />} />
        <Route path="/program/vlsi" element={<VLSI />} />
        <Route path="/program/business-communication" element={<BusinessCommunication />} />
        <Route path="/program/:programId" element={<ProgramTemplate />} />
        <Route path="/join/learner" element={<Learner />} />
        <Route path="/join/campus-ambassador" element={<CampusAmbassador />} />
        <Route path="/join/instructor" element={<Instructor />} />
        <Route path="/join/instructor" element={<Instructor />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/offline/digital-marketing" element={<DigitalMarketingOffline />} />
        <Route path="/make-your-own-pack" element={<MakeYourOwnPack />} />
        <Route path="/admin/9663415279/login" element={<AdminLogin />} />
        <Route path="/admin/9663415279/dashboard" element={<AdminDashboard />} />

        <Route path="/enroll" element={<Enroll />} />
        <Route path="/pay-remaining" element={<PayRemaining />} />

        <Route path="/payment-and-refund-policy" element={<PaymentAndRefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={
          <main>
            <HeroSection />
            <WhyInternzLearn />
            <FlagshipProgram />
            <CareerPacksSection />
            <ExploreDomains />
            <HowItWorks />
            <StudentSuccessStories />
            <AlumniCompanies />
            <FinalCTA />
          </main>
        } />
        <Route path="*" element={
          <main>
            <HeroSection />
            <WhyInternzLearn />
            <FlagshipProgram />
            <CareerPacksSection />
            <ExploreDomains />
            <HowItWorks />
            <StudentSuccessStories />
            <AlumniCompanies />
            <FinalCTA />
          </main>
        } />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-enroll" element={<ResumeEnroll />} />
        <Route path="/placement-readiness-test" element={<PlacementReadinessPage />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        {/* <Route path="/mock-interview" element={<MockInterview />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
