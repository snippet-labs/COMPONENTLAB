import { SetStateAction, useCallback, useMemo, useState } from 'react';
import { SidebarItems } from '@/constants/SidebarItems';

export function useSidebarSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = useMemo(
    () =>
      SidebarItems.filter((item) =>
        item.parentItemName.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const handleSearchChange = useCallback((event: { target: { value: SetStateAction<string> } }) => {
    setSearchQuery(event.target.value);
  }, []);

  return { searchQuery, setSearchQuery, handleSearchChange, filteredLinks };
}
