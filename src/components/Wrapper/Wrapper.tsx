'use client';

// Modules
import { useEffect, useState } from 'react';
import { progressItems } from '@/constants/ProgessItems';
import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import Content from '@/components/Ui/Content/Content';
import Sidebar from '@/components/Ui/Sidebar/Sidebar';
import Navigation from '../Ui/Navigation/Navigation';
import ProgressPanel from '../Ui/ProgessPanel/ProgressPanel';
import { WrapperTypes } from './Wrapper.types';

const Wrapper: React.FC<WrapperTypes> = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  const pathname = usePathname();

  const handleToggleSidebar = () => setIsSideBarOpen((prev) => !prev);

  // Progress-bar-configuration
  NProgress.configure({ showSpinner: false, trickleSpeed: 200, minimum: 0.2 });
  useEffect(() => {
    NProgress.start();
    const handleProgress = requestAnimationFrame(() => {
      NProgress.done();
    });

    // Cleanup
    return () => cancelAnimationFrame(handleProgress);
  }, [pathname]);

  return (
    <div className="relative min-h-screen w-full">
      {/* GRID */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <ReactLenis root>
        {/* NAVIGATION */}
        <Navigation handleToggleSidebar={handleToggleSidebar} />
        {/* LAYOUT */}
        <div className="flex w-full min-h-screen md:mt-5 lg:mt-5">
          <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
          <ProgressPanel tableOfContents={progressItems} position="right" />
          <Content isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar}>
            {children}
          </Content>
        </div>
      </ReactLenis>
    </div>
  );
};

export default Wrapper;
