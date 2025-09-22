export const SidebarItems = [
  {
    parentItemName: 'Getting started',
    path: '/',
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
    children: [
      { subItemName: 'Primary Button', path: 'buttons/primary-button' },
      { subItemName: 'Secondary Button', path: '' },
      { subItemName: 'Icon Button', path: '' },
    ],
  },
  {
    parentItemName: 'Checkboxes',
    path: '/checkboxes',
    children: [
      { subItemName: 'Basic Checkbox', path: '' },
      { subItemName: 'Group Checkbox', path: '' },
      { subItemName: 'Controlled Checkbox', path: '' },
    ],
  },
  {
    parentItemName: 'Forms',
    path: '/forms',
    children: [
      { subItemName: 'Login Form', path: '' },
      { subItemName: 'Register Form', path: 'r' },
      { subItemName: 'Contact Form', path: '' },
    ],
  },
];
