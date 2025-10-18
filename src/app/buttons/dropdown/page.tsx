'use client';

// Modules
import toast from 'react-hot-toast';
import { BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS } from '@/constants/Components/ButtonAccessibleComponentPaginationLinks';
import { DROPDOWN_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonTags';
import DropdownButtonVariant from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant';
import { DROPDOWN_BUTTON_VARIANT_CODE } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant.code';
import { columns, rows } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant.props';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Footer from '@/components/Ui/Footer/Footer';
import Information from '@/components/Ui/Information/Information';
import Pagination from '@/components/Ui/Pagination/Pagination';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import { DROPDOWN_BUTTON_VARIANT_PROGRESS_ITEMS } from './Dropdown.progress';

const DropdownAccessibleButtonVariantPage = () => {
  return (
    <div className="min-h-screen">
      <ProgressPanel tableOfContents={DROPDOWN_BUTTON_VARIANT_PROGRESS_ITEMS} position="right" />
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="dropdown-button">
          <Information
            variantTitle="Dropdown Accessible Button"
            variantDescription="The Accessible Dropdown Button provides a fully keyboard-navigable and screen reader friendly way to display a list of selectable options. It adheres to WAI-ARIA best practices, ensuring users can open, navigate, and select items using both keyboard and mouse interactions. The component manages focus states, announces dynamic content changes, and supports customizable labels for better accessibility and usability across devices."
            variantTags={DROPDOWN_BUTTON_VARIANT_TAGS}
            variantComponent={DropdownButtonVariant}
            variantComponentProps={{
              label: 'Choose a vehicle',
              options: [
                { value: 'Car', label: 'Car' },
                { value: 'Scooty', label: 'Scooty' },
                { value: 'Bike', label: 'Bike' },
              ],
              placeholder: 'Select a vehicle',
              onChange: (value: string | number) =>
                toast.success(`Vehicle selected`, { duration: 2000 }),
            }}
            variantCode={DROPDOWN_BUTTON_VARIANT_CODE}
            variantFileName="DropdownButtonVariant.tsx"
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
            previousRoute="/loading"
            previousRouteTitle="Loading"
            nextRoute="/checkboxs"
            nextRouteTitle="Checkboxes"
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

export default DropdownAccessibleButtonVariantPage;
