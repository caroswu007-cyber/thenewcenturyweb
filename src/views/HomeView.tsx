import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import TruthSection from '../components/home/TruthSection';
import Achievements from '../components/home/Achievements';
import JoinSection from '../components/home/JoinSection';
import SectionDivider from '../components/common/SectionDivider';

const HomeView = () => {
  return (
    <>
      <Hero />
      <SectionDivider label="Spirit Ambassador Association" />
      <Introduction />
      <SectionDivider label="The Documentary" />
      <TruthSection />
      <SectionDivider label="Discoveries" />
      <Achievements />
      <SectionDivider label="Join the Journey" />
      <JoinSection />
    </>
  );
};

export default HomeView;
