import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import TruthSection from '../components/home/TruthSection';
import Achievements from '../components/home/Achievements';
import JoinSection from '../components/home/JoinSection';

const HomeView = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <TruthSection />
      <Achievements />
      <JoinSection />
    </>
  );
};

export default HomeView;
