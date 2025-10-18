'use client';

// Modules
import toast from 'react-hot-toast';
import { BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS } from '@/constants/Components/ButtonAccessibleComponentPaginationLinks';
import { STANDARD_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Standard/StandardButtonTags';
import StandardButtonVariant from '@/lab/AccessibleButtons/Standard/StandardButtonVariant';
import { STANDARD_BUTTON_VARIABLE_CODE } from '@/lab/AccessibleButtons/Standard/StandardButtonVariant.code';
import { columns, rows } from '@/lab/AccessibleButtons/Standard/StandardButtonVariant.props';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Footer from '@/components/Ui/Footer/Footer';
import Information from '@/components/Ui/Information/Information';
import Pagination from '@/components/Ui/Pagination/Pagination';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import { STANDARD_BUTTON_VARIANT_PROGRESS_ITEMS } from './StandardButton.progress';

const StandardAccessibleButtonVariantPage = () => {
  return (
    <div className="min-h-screen">
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <ProgressPanel tableOfContents={STANDARD_BUTTON_VARIANT_PROGRESS_ITEMS} position="right" />
        <div id="standard-button">
          <Information
            variantTitle="Standard Accessible Button"
            variantDescription="The Standard Button Component is a fully accessible and customizable UI element designed to provide an inclusive user experience for all individuals, including those using assistive technologies. It adheres to WCAG and ARIA accessibility standards, ensuring proper keyboard navigation, focus states, and screen reader support. The component supports multiple visual variants (such as primary, secondary, and outline) while maintaining semantic HTML structure with the <button> element. Built with usability and consistency in mind, it offers responsive design, clear contrast ratios, and intuitive interactions  making it an ideal choice for creating accessible and user-friendly interfaces"
            variantTags={STANDARD_BUTTON_VARIANT_TAGS}
            variantComponent={StandardButtonVariant}
            variantComponentProps={{
              title: 'Standard',
              ariaLabel: 'Standard accessible',
              onClick: () => toast.success('Button Clicked', { duration: 2000 }),
              disabled: false,
            }}
            variantCode={STANDARD_BUTTON_VARIABLE_CODE}
            variantFileName="StandardButtonVariant.tsx"
            variantPropColumn={columns}
            variantPropRow={rows}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="quick-links">
          <Pagination
            paginationTitle="Follow up with other available components"
            cards={BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS}
            previousRoute="/buttons"
            previousRouteTitle="Button"
            nextRoute="/buttons/submit"
            nextRouteTitle="Submit"
            isExternalLink={false}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="know-more">
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default StandardAccessibleButtonVariantPage;
