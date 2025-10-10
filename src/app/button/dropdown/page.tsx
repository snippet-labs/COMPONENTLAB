'use client';

import { DROPDOWN_BUTTON_VARIANT_TAGS } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonTags';
import DropdownButtonVariant from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant';
import { DROPDOWN_BUTTON_VARIANT_CODE } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant.code';
import { columns, rows } from '@/lab/AccessibleButtons/Dropdown/DropdownButtonVariant.props';
import Information from '@/components/Ui/Information/Information';

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
          label: 'Choose an option',
          options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ],
          defaultValue: 'option1', 
        }}
        variantCode={DROPDOWN_BUTTON_VARIANT_CODE}
        variantFileName="Dropdown.tsx"
        variantPropColumn={columns}
        variantPropRow={rows}
      />
    </div>
  );
};

export default DropdownAccessibleButtonVariantPage;
