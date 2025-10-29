export function useFeatureFlag(pageKey: string) {
    const environmentPageVariable = `NEXT_PUBLIC_APPLICATION_${pageKey.toUpperCase()}`;
    const isEnabled = process.env[environmentPageVariable] === "true";
    return isEnabled;
}
