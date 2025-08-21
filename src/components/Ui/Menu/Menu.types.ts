export interface MenuProps {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
  children?: React.ReactNode;
}
