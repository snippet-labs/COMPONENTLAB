// setupTests.ts
import { vi } from "vitest";

// Mock for next/font/local
vi.mock("next/font/local", () => {
    return {
        default: () => ({
            className: "mocked-font",
            style: {},
            variable: "--mock-font",
        }),
    };
});

// Mock for next/router (if you ever use useRouter in components)
vi.mock("next/router", () => {
    return {
        useRouter: () => ({
            route: "/",
            pathname: "/",
            query: {},
            asPath: "/",
            push: vi.fn(),
            replace: vi.fn(),
            reload: vi.fn(),
            back: vi.fn(),
            prefetch: vi.fn(),
        }),
    };
});
