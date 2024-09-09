// pages/index.tsx or your specific page file
'use client';
import { useEffect } from 'react'; // Import useEffect
import Space from './components/myui/Space';
import Footer from './containers/Footer';
import HeroSection from './containers/HeroSection';
import Timeline from './containers/ProjectTimeline';
import SkillSection from './containers/SkillsSection';
import TimelineHeader from './containers/TimelineHeader';

export default function Home() {
  // Scroll to top when the component mounts
  // useEffect(() => {
  //   window.scrollTo(0, 0);  // This will scroll to the top
  // }, []);  // Empty dependency array to run only once on component mount
  return (
    <main>
      <div className="page-wrapper">
        <HeroSection />
        <Space />
        <SkillSection />
        <Space />
        <TimelineHeader />
        <Space />
        <Timeline />
        <Space />
        <Footer />
      </div>
    </main>
  );
}
