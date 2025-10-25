'use client';

// Modules
import toast from 'react-hot-toast';
import { LINK_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Link/LinkButtonTags';
import LinkButtonVariant from '@/lab/AccessibleButtons/Link/LinkButtonVariant';
import { LINK_BUTTON_VARIABLE_CODE } from '@/lab/AccessibleButtons/Link/LinkButtonVariant.code';
import { columns, rows } from '@/lab/AccessibleButtons/Link/LinkButtonVariant.props';
import { url } from 'inspector';
import { div } from 'motion/react-client';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Information from '@/components/Ui/Information/Information';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import { TOGGLE_BUTTON_VARIANT_PROGRESS_ITEMS } from '../toggle/Toggle.progress';
import Pagination from '@/components/Ui/Pagination/Pagination';
import { BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS } from '@/constants/Components/ButtonAccessibleComponentPaginationLinks';
import Footer from '@/components/Ui/Footer/Footer';

const LinkAccessibleButtonVariantPage = () => {
  return (
    <div className="min-h-screen">
      <ProgressPanel tableOfContents={TOGGLE_BUTTON_VARIANT_PROGRESS_ITEMS} position="right" />
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="toggle-button">
          <Information
            variantTitle="Accessible Link Button"
            variantDescription="The Accessible Link Button Component is an inclusive and adaptable UI element designed to combine the functionality of a link with the appearance and interactivity of a button. It fully adheres to WCAG and ARIA accessibility standards, ensuring that all users—including those using screen readers or keyboard navigation—can interact with it effectively.

Built using the semantic <a> element, the component leverages ARIA attributes such as aria-label and focus indicators to clearly convey purpose and destination. It provides full keyboard operability, visual focus feedback, and proper semantics for both internal and external navigation, including support for opening links in new tabs while maintaining accessibility through attributes like rel='noopener noreferrer'.

The component supports various visual variants (e.g., text links, icon links, or button-styled links) while maintaining design consistency across themes and devices. With responsive layout, high contrast ratios, and smooth hover and focus transitions, the Accessible Link Button ensures clarity, usability, and compliance—making it an ideal choice for creating accessible, interactive, and visually cohesive navigation elements in modern web applications."
            variantTags={LINK_BUTTON_VARIANT_TAGS}
            variantComponent={LinkButtonVariant}
            variantComponentProps={{
              title: 'Link button',
              ariaLabel: 'Standard Link button',
              disabled: false,
              url: '#',
              target: true,
            }}
            variantCode={LINK_BUTTON_VARIABLE_CODE}
            variantFileName="LinkButtonVariant.tsx"
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
            previousRoute="/buttons/toggle"
            previousRouteTitle="Toggle"
            nextRoute="/buttons/dropdown"
            nextRouteTitle="Dropdown"
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

export default LinkAccessibleButtonVariantPage;
