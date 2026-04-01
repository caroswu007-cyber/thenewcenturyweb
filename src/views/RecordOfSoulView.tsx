import RecordOfSoulHero from '../components/record/RecordOfSoulHero';
import EpisodeTimeline from '../components/record/EpisodeTimeline';

const RecordOfSoulView = () => {
  return (
    <div className="min-h-screen" style={{ background: '#E8D5B8' }}>
      <RecordOfSoulHero />
      <EpisodeTimeline />
    </div>
  );
};

export default RecordOfSoulView;
