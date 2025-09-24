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

// Accessible-components-variant-cards
export interface AccessibleComponentsVariantCardTypes {
  label: string;
  description: string;
  path: string;
}

// Table-prop-types
export type Column = string;
export type DataRow = (string | number)[];
export interface TableTypes {
  columns: Column[];
  rows: DataRow[];
}