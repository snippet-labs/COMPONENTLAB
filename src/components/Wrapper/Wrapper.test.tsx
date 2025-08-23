import React from "react";
import { render, screen } from "@testing-library/react";
import Wrapper from "./Wrapper";
import { describe, expect, it, vi } from "vitest";

const renderWrapper = () => render(<Wrapper>{null}</Wrapper>);

vi.mock("@/components/Ui/Navigation/Navigation", () => ({
  default: ({ handleToggleSidebar }: { handleToggleSidebar: () => void }) => (
    <div>MockNavigation</div>
  ),
}));

vi.mock("@/components/Ui/Sidebar/Sidebar", () => ({
  default: ({ isSidebarOpen, handleToggleSidebar }: { isSidebarOpen: boolean; handleToggleSidebar: () => void }) => (
    <div>MockSidebar</div>
  ),
}));

vi.mock("@/components/Ui/ProgessPanel/ProgressPanel", () => ({
  default: ({ tableOfContents, position }: { tableOfContents: string; position: string }) => (
    <div>MockProgressPanel</div>
  ),
}));

vi.mock("@/components/Ui/Content/Content", () => ({
  default: ({ children, isSidebarOpen, handleToggleSidebar }: { children: React.ReactNode; isSidebarOpen: boolean; handleToggleSidebar: () => void }) => (
    <div>
      MockContent
      <div>{children}</div>
    </div>
  ),
}));

describe("Wrapper", () => {
  it("should render Navigation component", () => {
    renderWrapper();
    const nav = screen.queryAllByText("MockNavigation")[0];
    expect(nav).not.toBeNull();
  });

  it("should render Sidebar component", () => {
    renderWrapper();
    const sidebar = screen.queryAllByText("MockSidebar")[0];
    expect(sidebar).not.toBeNull();
  });

  it("should render ProgressPanel component", () => {
    renderWrapper();
    const progress = screen.queryAllByText("MockProgressPanel")[0];
    expect(progress).not.toBeNull();
  });

  it("should render Content component", () => {
    renderWrapper();
    const content = screen.queryAllByText("MockContent")[0];
    expect(content).not.toBeNull();
  });
});