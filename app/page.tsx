import ScrollHook from "./components/animation/ScrollHook";
import HeroSection from "./containers/HeroSection";
import MissionSection from "./containers/MissionSection";
import SkillSection from "./containers/SkillsSection";
import horizon from '@/public/Images/horizon.png';


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between ">
    <main >

      <HeroSection />
      <ScrollHook><MissionSection /></ScrollHook>
      <ScrollHook><SkillSection /></ScrollHook>
    </main>
  );
}
