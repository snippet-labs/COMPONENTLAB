'use client';

// Modules
import toast from 'react-hot-toast';
import { STANDARD_ACCESSIBLE_COMPONENT_PAGINATION_LINKS } from '@/constants/Components/StandardAccessibleComponentPaginationLinks';
import { columns, rows } from '@/lab/AccessibleButtons/Standard/StandardButtonVariant.props';
import { TOGGLE_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Toggle/ToggleButtonTags';
import ToggleButtonVariant from '@/lab/AccessibleButtons/Toggle/ToggleButtonVariant';
import { TOGGLE_BUTTON_VARIABLE_CODE } from '@/lab/AccessibleButtons/Toggle/ToggleButtonVariant.code';
import Footer from '@/components/Ui/Footer/Footer';
import Information from '@/components/Ui/Information/Information';
import Pagination from '@/components/Ui/Pagination/Pagination';

const ToogleAccessibleButtonVariantPage = () => {
  return (
    <div className="min-h-screen">
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
      <Pagination
        paginationTitle="Follow up with other available components"
        cards={STANDARD_ACCESSIBLE_COMPONENT_PAGINATION_LINKS}
        previousRoute="/button/reset"
        previousRouteTitle="Reset"
        nextRoute="/button/Link"
        nextRouteTitle="Link"
        isExternalLink={false}
      />
      <Footer />
    </div>
  );
};

export default ToogleAccessibleButtonVariantPage;
