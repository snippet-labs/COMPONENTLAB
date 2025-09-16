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

// Link-cards-types
export interface LinkCardsTypes {
  label: string;
  route: string;
}
