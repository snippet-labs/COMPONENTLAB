'use client';

// Modules
import { useState } from 'react';
import { progressItems } from '@/constants/ProgessItems';
import Content from '@/components/Ui/Content/Content';
import Sidebar from '@/components/Ui/Sidebar/Sidebar';
import Navigation from '../Ui/Navigation/Navigation';
import ProgressPanel from '../Ui/ProgessPanel/ProgressPanel';
import { WrapperTypes } from './Wrapper.types';

const Wrapper: React.FC<WrapperTypes> = ({ children }) => {
  // STATES
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  // HANDLER
  const handleToggleSidebar = () => setIsSideBarOpen((previous) => !previous);

  return (
    <>
      <Navigation handleToggleSidebar={handleToggleSidebar} />
      <div className="flex w-full min-h-screen md:mt-5 lg:mt-5">
        <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
        <ProgressPanel tableOfContents={progressItems} position="right" />
        <Content isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar}>
          {children}
        </Content>
      </div>
    </>
  );
};

export default Wrapper;
