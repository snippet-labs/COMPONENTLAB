export interface ProgressPanelSubSection {
  id: string;
  title: string;
}

export interface ProgressPanelSection {
  id: string;
  title: string;
  subsections?: ProgressPanelSubSection[];
}

export interface QuickLinkCards {
  label: string;
  route: string;
}
