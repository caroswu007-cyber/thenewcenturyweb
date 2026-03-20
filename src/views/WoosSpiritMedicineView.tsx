import React from 'react';
import SpiritMedicineHero from '../components/spiritMedicine/SpiritMedicineHero';
import SpiritMedicineContents from '../components/spiritMedicine/SpiritMedicineContents';

const WoosSpiritMedicineView = () => {
  return (
    <div style={{ background: '#0a2535' }}>
      <SpiritMedicineHero />
      <SpiritMedicineContents />
    </div>
  );
};

export default WoosSpiritMedicineView;
