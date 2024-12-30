import type { ResourceType } from "@prisma/client";

export interface ResourcePreview {
    path: string;
    name: string;
    thumbnail?: string;
    updated: Date;
    size: number;
}

export interface NestedAlbum {
    path: string;
    name: string;
    thumbnail?: string;
    updated: Date;
}

export interface Album {
    path: string;
    name: string;
    type: ResourceType;
    resources: ResourcePreview[];
    albums: NestedAlbum[];
    cognates: number[];
}