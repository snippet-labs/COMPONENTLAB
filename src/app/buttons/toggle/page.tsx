'use client';

// Modules
import toast from 'react-hot-toast';
import { BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS } from '@/constants/Components/ButtonAccessibleComponentPaginationLinks';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { columns, rows } from '@/lab/AccessibleButtons/Standard/StandardButtonVariant.props';
import { TOGGLE_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Toggle/ToggleButtonTags';
import ToggleButtonVariant from '@/lab/AccessibleButtons/Toggle/ToggleButtonVariant';
import { TOGGLE_BUTTON_VARIABLE_CODE } from '@/lab/AccessibleButtons/Toggle/ToggleButtonVariant.code';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Footer from '@/components/Ui/Footer/Footer';
import Information from '@/components/Ui/Information/Information';
import Pagination from '@/components/Ui/Pagination/Pagination';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import UnderDevelopment from '@/components/Ui/UnderDevelopment/UnderDevelopment';
import { TOGGLE_BUTTON_VARIANT_PROGRESS_ITEMS } from './Toggle.progress';

const ToggleAccessibleButtonVariantPage = () => {
  const isEnabled = useFeatureFlag('BUTTON_TOGGLE_PAGE');

  if (!isEnabled)
    return (
      <div data-testid="underdevelopment-page">
        <UnderDevelopment />
      </div>
    );

  return (
    <div className="min-h-screen">
      <div data-testid="progress-panel">
        <ProgressPanel tableOfContents={TOGGLE_BUTTON_VARIANT_PROGRESS_ITEMS} position="right" />
      </div>

      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="toggle-button">
          <div data-testid="information-section">
            <Information
              variantTitle="Accessible Toggle Button"
              variantDescription="The Toggle Button Component is an accessible and versatile UI control designed to represent on/off or active/inactive states with clear visual feedback. It fully complies with WCAG and ARIA accessibility standards, providing seamless keyboard navigation, proper focus management, and screen reader compatibility. Built using the semantic <button> element, it communicates state changes through ARIA attributes such as aria-pressed, ensuring an inclusive experience for users relying on assistive technologies.

        The component supports multiple visual styles (e.g., switch, icon, or text-based toggles) while maintaining design consistency across devices. With responsive behavior, distinct contrast ratios, and smooth state transitions, the Toggle Button offers both usability and clarity—making it an excellent choice for building interactive and accessible interfaces."
              variantTags={TOGGLE_BUTTON_VARIANT_TAGS}
              variantComponent={ToggleButtonVariant}
              variantComponentProps={{
                title: 'Theme',
                ariaLabel: 'Standard toggle button',
                onClick: () => toast.success('Button Toggled', { duration: 2000 }),
                disabled: false,
              }}
              variantCode={TOGGLE_BUTTON_VARIABLE_CODE}
              variantFileName="ToggleButtonVariant.tsx"
              variantPropColumn={columns}
              variantPropRow={rows}
            />
          </div>
        </div>
      </ErrorBoundary>

      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="quick-links">
          <div data-testid="pagination-section">
            <Pagination
              paginationTitle="Follow up with other available components"
              cards={BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS}
              previousRoute="/button/reset"
              previousRouteTitle="Reset"
              nextRoute="/button/Link"
              nextRouteTitle="Link"
              isExternalLink={false}
            />
          </div>{' '}
        </div>
      </ErrorBoundary>

      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="know-more">
          <div data-testid="footer-section">
            <Footer data-testid="footer-section" />
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default ToggleAccessibleButtonVariantPage;
