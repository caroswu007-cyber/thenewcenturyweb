import UniversalMatrixHero from '../components/universalMatrix/UniversalMatrixHero';
import UniversalMatrixContents from '../components/universalMatrix/UniversalMatrixContents';

const UniversalMatrixView = () => {
  return (
    <div style={{ background: '#060a14' }}>
      <UniversalMatrixHero />
      <UniversalMatrixContents />
    </div>
  );
};

export default UniversalMatrixView;
