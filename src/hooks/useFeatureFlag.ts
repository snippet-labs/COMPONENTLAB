// Static mapping of all feature flags to allow Next.js to inline environment variables at build time
const FEATURE_FLAGS: Record<string, boolean> = {
  // Pages
  HOME_PAGE: process.env.NEXT_PUBLIC_APPLICATION_HOME_PAGE === 'true',
  INSTALLATION_PAGE: process.env.NEXT_PUBLIC_APPLICATION_INSTALLATION_PAGE === 'true',
  HEADER_PAGE: process.env.NEXT_PUBLIC_APPLICATION_HEADER_PAGE === 'true',
  TEAM_PAGE: process.env.NEXT_PUBLIC_APPLICATION_TEAM_PAGE === 'true',

  // Buttons
  BUTTON_STARTER_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_STARTER_PAGE === 'true',
  BUTTON_STANDARD_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_STANDARD_PAGE === 'true',
  BUTTON_SUBMIT_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_SUBMIT_PAGE === 'true',
  BUTTON_RESET_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_RESET_PAGE === 'true',
  BUTTON_TOGGLE_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_TOGGLE_PAGE === 'true',
  BUTTON_LINK_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_LINK_PAGE === 'true',
  BUTTON_LOADING_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_LOADING_PAGE === 'true',
  BUTTON_DROPDOWN_PAGE: process.env.NEXT_PUBLIC_APPLICATION_BUTTON_DROPDOWN_PAGE === 'true',

  // Checkboxes
  CHECKBOX_STARTER_PAGE: process.env.NEXT_PUBLIC_APPLICATION_CHECKBOX_STARTER_PAGE === 'true',
  CHECKBOX_BASIC_PAGE: process.env.NEXT_PUBLIC_APPLICATION_CHECKBOX_BASIC_PAGE === 'true',
  CHECKBOX_GROUP_PAGE: process.env.NEXT_PUBLIC_APPLICATION_CHECKBOX_GROUP_PAGE === 'true',
  CHECKBOX_CONTROLLED_PAGE: process.env.NEXT_PUBLIC_APPLICATION_CHECKBOX_CONTROLLED_PAGE === 'true',
};

export function useFeatureFlag(pageKey: string) {
  const normalizedKey = pageKey.toUpperCase();
  const isEnabled = FEATURE_FLAGS[normalizedKey] ?? false;
  return isEnabled;
}
