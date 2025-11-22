import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import UnderDevelopment from '@/components/Ui/UnderDevelopment/UnderDevelopment';

const ResetAccessibleButtonVariantPage: React.FC = () => {
  const isEnabled = useFeatureFlag('BUTTON_RESET_PAGE');

  if (!isEnabled)
    return (
      <div data-testid="underdevelopment-page">
        <UnderDevelopment />
      </div>
    );

  return (
    <div className="min-h-screen">
      <></>
    </div>
  );
};

export default ResetAccessibleButtonVariantPage;
