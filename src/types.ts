export interface ProgressPanelSubSection {
  id: string;
  title: string;
}

export interface ProgressPanelSection {
  id: string;
  title: string;
  subsections?: ProgressPanelSubSection[];
}

export interface QuickLinkCardsProps {
  label: string;
  route: string;
}
