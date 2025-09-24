import { DataRow } from "@/types";

export interface InformationProps {
    variantTitle: string;
    variantDescription: string;
    variantComponent: React.ComponentType;
    variantCode: string;
    variantFileName: string;
    variantPropColumn: string[];
    variantPropRow: DataRow[];
}