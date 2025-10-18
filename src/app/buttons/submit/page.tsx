'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS } from '@/constants/Components/ButtonAccessibleComponentPaginationLinks';
import { SUBMIT_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Submit/SubmitButtonTags';
import SubmitButtonVariant from '@/lab/AccessibleButtons/Submit/SubmitButtonVariant';
import { SUBMIT_BUTTON_VARIABLE_CODE } from '@/lab/AccessibleButtons/Submit/SubmitButtonVariant.code';
import { columns, rows } from '@/lab/AccessibleButtons/Submit/SubmitButtonVariant.props';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Footer from '@/components/Ui/Footer/Footer';
import Information from '@/components/Ui/Information/Information';
import Pagination from '@/components/Ui/Pagination/Pagination';

const SubmitAccessibleButtonVariantPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Submitted form successfully', { duration: 2000 });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <Information
          variantTitle="Submit Accessible Button"
          variantDescription="The Submit Button Component is a fully accessible and customizable UI element designed to provide an inclusive user experience for all individuals, including those using assistive technologies. It adheres to WCAG and ARIA accessibility standards, ensuring proper keyboard navigation, focus states, and screen reader support. The component supports multiple visual variants (such as primary, secondary, and outline) while maintaining semantic HTML structure with the <button> element. Built with usability and consistency in mind, it offers responsive design, clear contrast ratios, and intuitive interactions making it an ideal choice for creating accessible and user-friendly interfaces"
          variantTags={SUBMIT_BUTTON_VARIANT_TAGS}
          variantComponent={SubmitButtonVariant}
          variantComponentProps={{
            onClick: handleSubmit,
            loading: loading,
          }}
          variantCode={SUBMIT_BUTTON_VARIABLE_CODE}
          variantFileName="SubmitButtonVariant.tsx"
          variantPropColumn={columns}
          variantPropRow={rows}
        />
      </ErrorBoundary>

      <ErrorBoundary errorComponent={FallSafeComponent}>
        <Pagination
          paginationTitle="Follow up with other available components"
          cards={BUTTON_ACCESSIBLE_COMPONENT_PAGINATION_LINKS}
          previousRoute="/buttons/standard"
          previousRouteTitle="Standard"
          nextRoute="/buttons/reset"
          nextRouteTitle="Reset"
          isExternalLink={false}
        />
      </ErrorBoundary>

      <ErrorBoundary errorComponent={FallSafeComponent}>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default SubmitAccessibleButtonVariantPage;
