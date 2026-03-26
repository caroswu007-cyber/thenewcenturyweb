import SpiritMedicineHero from '../components/spiritMedicine/SpiritMedicineHero';
import SpiritMedicineFullOutline from '../components/spiritMedicine/SpiritMedicineFullOutline';
import SpiritMedicineContents from '../components/spiritMedicine/SpiritMedicineContents';

const WoosSpiritMedicineView = () => {
  return (
    <div style={{ background: '#0a2535' }}>
      <SpiritMedicineHero />
      <SpiritMedicineFullOutline />
      <SpiritMedicineContents />
    </div>
  );
};

export default WoosSpiritMedicineView;
