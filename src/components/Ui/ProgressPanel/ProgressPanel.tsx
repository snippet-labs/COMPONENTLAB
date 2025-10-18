'use client';

// Modules
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import Link from 'next/link';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import { ProgressPanelProps } from './ProgressPanel.types';

const ProgressPanel: React.FC<ProgressPanelProps> = ({
  tableOfContents,
  position = 'right',
  isSidebarOpen,
}) => {
  // HOOKS
  const activeSection = useScrollSpy(tableOfContents);

  // HANDLER
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`hidden lg:block fixed top-0 ${position === 'right' ? 'right-0' : 'left-0'} 
         h-screen bg-white shadow-md border-l-2 backdrop-blur-sm overflow-y-auto z-[80] ${isSidebarOpen ? 'w-62' : 'w-63'} transition-all duration-300`}
    >
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <nav className="px-4 py-4 pt-25">
          <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation">
            ON THIS PAGE
          </p>
          <div className="space-y-1">
            {tableOfContents.map((section) => (
              <div key={section.id}>
                <div className="flex items-center">
                  <MdOutlineRadioButtonChecked size={15} />
                  <Link
                    href={`#${section.id}`}
                    onClick={(e) => handleSectionClick(e, section.id)}
                    className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                      activeSection === section.id ? 'text-black font-bold' : ''
                    }`}
                  >
                    {section.title}
                  </Link>
                </div>

                {/* SUBSECTIONS */}
                <ErrorBoundary errorComponent={FallSafeComponent}>
                  {Array.isArray(section.subsections) && section.subsections.length > 0 && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2">
                      {section.subsections.map((sub) => (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          onClick={(e) => handleSectionClick(e, sub.id)}
                          className={`block px-3 py-1 text-xs rounded-md transition-all duration-200 hover:ml-2 hover:text-black ${
                            activeSection === sub.id ? 'text-black font-bold' : ''
                          }`}
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </ErrorBoundary>
              </div>
            ))}
          </div>
        </nav>
      </ErrorBoundary>
    </div>
  );
};

export default ProgressPanel;
