'use client';

// Modules
import { useState } from 'react';
import { progressItems } from '@/constants/ProgressItems';
import Content from '@/components/Ui/Content/Content';
import Sidebar from '@/components/Ui/Sidebar/Sidebar';
import Navigation from '../Ui/Navigation/Navigation';
import ProgressPanel from '../Ui/ProgressPanel/ProgressPanel';
import { WrapperTypes } from './Wrapper.types';

const Wrapper: React.FC<WrapperTypes> = ({ children }) => {
  // STATES
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);

  // HANDLER
  const handleToggleSidebar = () => setIsSideBarOpen((previous) => !previous);

  return (
    <div className="relative min-h-screen w-full">
      {/* GRID */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* NAVIGATION */}
      <Navigation />

      {/* LAYOUT */}
      <div className="flex w-full min-h-screen md:mt-5 lg:mt-5">
        <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
        <ProgressPanel tableOfContents={progressItems} position="right" />
        <Content isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar}>
          {children}
        </Content>
      </div>
    </div>
  );
};

export default Wrapper;
