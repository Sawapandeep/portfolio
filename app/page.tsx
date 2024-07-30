import ScrollHook from "./components/animation/ScrollHook";
import Card from "./containers/Card";
import HeroSection from "./containers/HeroSection";
import MissionSection from "./containers/MissionSection";
import SkillSection from "./containers/SkillsSection";


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between ">
    <main >

      <HeroSection />
      <ScrollHook><MissionSection /></ScrollHook>
      <ScrollHook><SkillSection /></ScrollHook>
      <Card />

    </main>
  );
}
