import { AccessibleComponentTags, DataRow } from "@/types";

export interface InformationProps {
    variantTitle: string;
    variantDescription: string;
    variantTags: AccessibleComponentTags[],
    variantComponent: React.ComponentType;
    variantComponentProps: Record<string, unknown>;
    variantCode: string;
    variantFileName: string;
    variantPropColumn: string[];
    variantPropRow: DataRow[];
}