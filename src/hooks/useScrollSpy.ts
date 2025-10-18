// Modules
import { useEffect, useState } from 'react';
import type { ProgressPanelSectionTypes } from '@/types';

export function useScrollSpy(tableOfContents: ProgressPanelSectionTypes[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.flatMap((section) => [
        section,
        ...(section.subsections || []),
      ]);

      const scrollPosition = window.scrollY + 260;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  return activeSection;
}
