'use client';

import toast from 'react-hot-toast';
import { STANDARD_ACCESSIBLE_COMPONENT_PAGINATION_LINKS } from '@/constants/Components/StandardAccessibleComponentPaginationLinks';
import { DROPDOWN_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonTags';
import DropdownButtonVariant from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant';
import { DROPDOWN_BUTTON_VARIANT_CODE } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant.code';
import { columns, rows } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant.props';
import Footer from '@/components/Ui/Footer/Footer';
import Information from '@/components/Ui/Information/Information';
import Pagination from '@/components/Ui/Pagination/Pagination';

// Modules

const DropdownAccessibleButtonVariantPage = () => {
  return (
    <div className="min-h-screen">
      <Information
        variantTitle="Dropdown Button"
        variantDescription="This is an accessible dropdown component"
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
            toast.success(`Selected: ${value}`, { duration: 2000 }),
        }}
        variantCode={DROPDOWN_BUTTON_VARIANT_CODE}
        variantFileName="Dropdown.tsx"
        variantPropColumn={columns}
        variantPropRow={rows}
      />

      <Pagination
        paginationTitle="Follow up with other available components"
        cards={STANDARD_ACCESSIBLE_COMPONENT_PAGINATION_LINKS}
        previousRoute="/loading"
        previousRouteTitle="Loading"
      />
      <Footer />
    </div>
  );
};

export default DropdownAccessibleButtonVariantPage;
