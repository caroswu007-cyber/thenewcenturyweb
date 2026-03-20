import React from 'react';
import RecordOfSoulHero from '../components/record/RecordOfSoulHero';
import EpisodeTimeline from '../components/record/EpisodeTimeline';

const RecordOfSoulView = () => {
  return (
    <div style={{ background: '#1a1610' }}>
      <RecordOfSoulHero />
      <EpisodeTimeline />
    </div>
  );
};

export default RecordOfSoulView;
