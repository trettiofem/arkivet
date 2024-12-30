export interface ResourcePreview {
    path: string;
    name: string;
    thumbnail?: string;
}

export interface NestedAlbum {
    path: string;
    name: string;
    thumbnails?: string[];
}

export interface Album {
    path: string;
    name: string;
    resources: ResourcePreview[];
    albums: NestedAlbum[];
    cognates: number[];
}