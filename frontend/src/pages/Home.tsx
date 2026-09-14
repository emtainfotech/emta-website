import SEO from "../components/common/SEO";
import HeroSection from "../components/sections/HeroSection";
import HiringPartners from "../components/sections/HiringPartners";
import BusinessSolutions from "../components/sections/BusinessSolutions";
import AboutSection from "../components/sections/AboutSection";
import FeaturedJobs from "../components/sections/FeaturedJobs";
import FresherCTA from "../components/sections/FresherCTA";
import TrainingCourses from "../components/sections/TrainingCourses";
import OffCampusJobs from "../components/sections/OffCampusJobs";
import Testimonials from "../components/sections/Testimonials";
import RecentBlogs from "../components/sections/RecentBlogs";
import QuickActions from "../components/sections/QuickActions";
import FAQ from "../components/sections/FAQ";

export default function Home() {
  return (
    <>
      <SEO
        title="Best Job Consultancy in Indore | Placement Services & Jobs for Freshers | EMTA"
        description="EMTA is a leading job consultancy in Indore offering placement services, jobs for freshers, BPO jobs, banking jobs, IT jobs, interview preparation, resume guidance, and BFSI training."
        canonical="https://emta.co.in/"
      />

      <main className="overflow-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Hiring partners / company logos */}
      <HiringPartners />

      {/* Job seeker & employer solutions */}
      <BusinessSolutions />

      {/* About EMTA + statistics + video */}
      <AboutSection />

      {/* Featured job openings */}
      <FeaturedJobs />

      {/* Jobs for freshers */}
      <FresherCTA />

      {/* BFSI training programs */}
      <TrainingCourses />

      {/* Off-campus opportunities */}
      <OffCampusJobs />

      {/* Candidate testimonials */}
      <Testimonials />

      {/* Latest career articles */}
      <RecentBlogs />

      {/* Floating quick actions */}
      <QuickActions />

      {/* Frequently asked questions */}
      <FAQ />
      </main>
    </>
  );
}