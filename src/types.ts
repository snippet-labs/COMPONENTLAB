// Progress-panel-types
export interface ProgressPanelSubSectionTypes {
  id: string;
  title: string;
}

// Progress-panel-section-types
export interface ProgressPanelSectionTypes {
  id: string;
  title: string;
  subsections?: ProgressPanelSubSectionTypes[];
}

// Quick-link-cards-types
export interface QuickLinkCardsTypes {
  label: string;
  route: string;
}
