'use client';

// Modules
import Footer from '@/components/Ui/Footer/Footer';
import Pagination from '@/components/Ui/Pagination/Pagination';

const InstallationGuidePage = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-sm font-medium">COMPONENTLAB/</h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">Getting Started</h2>
        <p className="mt-10 text-sm md:text-lg lg:text-lg text-gray-600 font-medium text-justify">
          ComponentLAB is designed with low dependency, focusing solely on delivering clean,
          reusable code to help you build your next accessible component with ease. With a simple
          installation process, you can quickly &nbsp;
          <code className="bg-gray-200 px-1 border-1 rounded-lg">copy</code> and &nbsp;
          <code className="bg-gray-200 px-1 border-1 rounded-lg">paste</code> any component&apos;s
          code block to get your component up and running. Additionally, all components are fully
          compatible with Tailwind CSS, making it effortless to customize and style them to fit your
          project&apos;s needs.
        </p>
      </div>
      <div>
        <div className="mt-10">
          <p className="font-bold text-3xl">Installation</p>
        </div>
      </div>
      <Pagination
        previousRoute="/"
        previousRouteTitle="Home"
        nextRoute="/button"
        nextRouteTitle="Button"
      />
      <Footer />
    </div>
  );
};

export default InstallationGuidePage;
