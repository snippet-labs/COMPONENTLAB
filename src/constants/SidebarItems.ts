// Global variables
import { BUTTON_VARIANTS, CHECKBOX_VARIANTS } from './global';

// Sidebar items
export const SidebarItems = [
  {
    parentItemName: 'Getting Started',
    path: '',
    children: [
      {
        subItemName: 'Installation',
        path: '/installation',
      },
    ],
  },
  {
    parentItemName: 'Buttons',
    path: '/buttons',
    children: BUTTON_VARIANTS.map((variant) => ({
      subItemName: variant,
      path: `/buttons/${variant.toLowerCase()}`,
    })),
  },
  {
    parentItemName: 'Checkboxes',
    path: '/checkboxes',
    children: CHECKBOX_VARIANTS.map((variant) => ({
      subItemName: variant,
      path: `/checkboxes/${variant.toLowerCase()}`,
    })),
  },
  {
    parentItemName: 'Forms',
    path: '/forms',
    children: [
      { subItemName: 'Login', path: '/forms/login' },
      { subItemName: 'Register', path: '/forms/register' },
      { subItemName: 'Contact', path: '/forms/contact' },
    ],
  },
];
