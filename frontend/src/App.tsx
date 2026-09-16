import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackToTop from "./components/common/BackToTop";
import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import SEOJobLanding from "./pages/SEOJobLanding";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import BfsiTraining from "./pages/BfsiTraining";
import CourseDetails from "./pages/CourseDetails";
import JobDetails from "./pages/JobDetails";
import ForEmployee from "./pages/ForEmployee";
import ForEmployer from "./pages/ForEmployer";
import WorkWithUs from "./pages/WorkWithUs";
import HireWithUs from "./pages/HireWithUs";
import StudyWithUs from "./pages/StudyWithUs";
import PartnerWithUs from "./pages/PartnerWithUs";
import JobPlacement from "./pages/JobPlacement";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white text-slate-950">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/bfsi-training" element={<BfsiTraining />} />
          <Route path="/course/:id" element={<CourseDetails />} />

          <Route
            path="/jobs/customer-care-executive-vijay-nagar"
            element={<SEOJobLanding />}
          />
          <Route
            path="/jobs/inside-sales-executive"
            element={<SEOJobLanding />}
          />
          <Route
            path="/jobs/customer-care-swiggy"
            element={<SEOJobLanding />}
          />
          <Route
            path="/jobs/customer-success-associate-vivint"
            element={<SEOJobLanding />}
          />
          <Route
            path="/jobs/customer-support-walmart"
            element={<SEOJobLanding />}
          />
          <Route
            path="/jobs/customer-support-seller-support"
            element={<SEOJobLanding />}
          />
          <Route
            path="/jobs/senior-accountant"
            element={<SEOJobLanding />}
          />
          <Route path="/jobs/:id" element={<JobDetails />} />

          <Route path="/for-employee" element={<ForEmployee />} />
          <Route path="/for-employer" element={<ForEmployer />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/hire-with-us" element={<HireWithUs />} />
          <Route path="/study-with-us" element={<StudyWithUs />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/job-placement" element={<JobPlacement />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}