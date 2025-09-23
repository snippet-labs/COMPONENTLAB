// Global variables
import { BUTTON_VARIANTS, CHECKBOX_VARIANTS } from './global';

// Sidebar items
export const SidebarItems = [
  {
    parentItemName: 'Getting Started',
    path: '/installation',
    children: [
      {
        subItemName: 'Installation',
        path: '/installation',
      },
    ],
  },
  {
    parentItemName: 'Button',
    path: '/button',
    children: BUTTON_VARIANTS.map((variant) => ({
      subItemName: variant,
      path: `/button/${variant.toLowerCase()}`,
    })),
  },
  {
    parentItemName: 'Checkboxes',
    path: '/checkboxes',
    children: CHECKBOX_VARIANTS.map((variant) => ({
      subItemName: variant,
      path: `/checkbox/${variant.toLowerCase()}`,
    })),
  },
  {
    parentItemName: 'Forms',
    path: '/forms',
    children: [
      { subItemName: 'Login Form', path: '/forms/login' },
      { subItemName: 'Register Form', path: '/forms/register' },
      { subItemName: 'Contact Form', path: '/forms/contact' },
    ],
  },
];
