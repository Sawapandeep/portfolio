// pages/index.tsx or your specific page file
'use client';
import Space from './components/myui/Space';
import Footer from './containers/Footer';
import HeroSection from './containers/HeroSection';
import Timeline from './containers/ProjectTimeline';
import SkillSection from './containers/SkillsSection';
import TimelineHeader from './containers/TimelineHeader';

export default function Home() {

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
