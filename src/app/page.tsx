// Modules
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import Header from '@/components/Pages/Header/Header';
import UnderDevelopment from '@/components/Ui/UnderDevelopment/UnderDevelopment';

const Index: React.FC = () => {
  const isEnabled = useFeatureFlag('HEADER_PAGE');

  if (!isEnabled)
    return (
      <div data-testid="underdevelopment-page">
        <UnderDevelopment />
      </div>
    );

  return <Header />;
};

export default Index;
