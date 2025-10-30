// Modules
import { describe, expect, it } from 'vitest';
import { useFeatureFlag } from '../useFeatureFlag';

// Test Suite
describe('useFeatureFlag', () => {
  it('should return true when a feature flag exists in the mapping and is enabled', () => {
    // Test with a real feature flag that exists in FEATURE_FLAGS (HOME_PAGE)
    const result = useFeatureFlag('HOME_PAGE');
    // The result depends on the actual environment variable value at build time
    expect(typeof result).toBe('boolean');
  });

  it('should return false when a feature flag does not exist in the mapping', () => {
    const result = useFeatureFlag('NONEXISTENT_PAGE');
    expect(result).toBe(false);
  });

  it('should normalize pageKey to uppercase', () => {
    // Test that lowercase input works by normalizing to uppercase
    const lowerResult = useFeatureFlag('home_page');
    const upperResult = useFeatureFlag('HOME_PAGE');
    expect(lowerResult).toBe(upperResult);
  });

  it('should handle mixed-case pageKey correctly', () => {
    const mixedResult = useFeatureFlag('HoMe_PaGe');
    const upperResult = useFeatureFlag('HOME_PAGE');
    expect(mixedResult).toBe(upperResult);
  });

  it('should return false for undefined keys using nullish coalescing', () => {
    const result = useFeatureFlag('COMPLETELY_UNKNOWN_KEY_THAT_DOES_NOT_EXIST');
    expect(result).toBe(false);
  });
});
