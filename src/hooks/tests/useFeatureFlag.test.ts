// Modules
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useFeatureFlag } from '../useFeatureFlag';

// Env mock
const ORIGINAL_ENV = process.env;

// Test Suite
describe('useFeatureFlag', () => {
  // Cleanup
  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
  });

  it('should return true when the feature flag is set to "true"', () => {
    process.env.NEXT_PUBLIC_APPLICATION_SAMPLE_TEST_PAGE = 'true';
    const result = useFeatureFlag('SAMPLE_TEST_PAGE');
    expect(result).toBe(true);
  });

  it('should return false when the feature flag is set to "false"', () => {
    process.env.NEXT_PUBLIC_APPLICATION_SAMPLE_TEST_PAGE = 'false';
    const result = useFeatureFlag('SAMPLE_TEST_PAGE');
    expect(result).toBe(false);
  });

  it('should return false when the feature flag is undefined', () => {
    delete process.env.NEXT_PUBLIC_APPLICATION_UNDEFINED_PAGE;
    const result = useFeatureFlag('UNDEFINED_PAGE');
    expect(result).toBe(false);
  });

  it('should convert pageKey to uppercase when forming the environment variable', () => {
    process.env.NEXT_PUBLIC_APPLICATION_SAMPLE_TEST_PAGE = 'true';
    const result = useFeatureFlag('Sample_test_page');
    expect(result).toBe(true);
  });

  it('should handle mixed-case pageKey correctly', () => {
    process.env.NEXT_PUBLIC_APPLICATION_SAMPLE_TEST_PAGE = 'true';
    const result = useFeatureFlag('SAmPle_TesT_PAGe');
    expect(result).toBe(true);
  });
});
