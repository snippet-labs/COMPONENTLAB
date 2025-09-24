'use client';

// Modules
import StandardVariant from '@/app/lab/AccessibleButtons/Standard/StandardVariant';
import { columns } from '@/app/lab/AccessibleButtons/Standard/StandardVariant.props';
import { rows } from '@/app/lab/AccessibleButtons/Standard/StandardVariant.props';
import Footer from '@/components/Ui/Footer/Footer';
import Information from '@/components/Ui/Information/Information';
import Pagination from '@/components/Ui/Pagination/Pagination';

const StandardAccessibleButtonVariantPage = () => {
  return (
    <div className="min-h-screen">
      <Information
        variantTitle="Standard Button"
        variantDescription="This is a standard button which is not only accessible but also amazing to look at"
        variantComponent={StandardVariant}
        variantFileName="button.tsx"
        variantCode="<h1>good button</h1>"
        variantPropRow={rows}
        variantPropColumn={columns}
      />
      <Pagination />
      <Footer />
    </div>
  );
};

export default StandardAccessibleButtonVariantPage;
