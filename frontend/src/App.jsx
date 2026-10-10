import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import AboutPage from './pages/AboutPage';
import FounderPage from './pages/FounderPage';
import ProcessPage from './pages/ProcessPage';
import TestimonialsPage from './pages/TestimonialsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#080b11] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
