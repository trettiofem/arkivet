import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Album } from "$lib/types";

const fake_Nollning: Album = {
    path: "2002/Bilder",
    name: "Nollning",
    albums: [
        { path: "2002/Bilder/Nollning", name: "Nollegasque", thumbnails: ["https://minio.api.dsek.se/members/public/ax0272ha-s/epic%20bild2340.png", "https://minio.api.dsek.se/members/public/ja0765an-s/IMG_48581916.jpeg"] },
        { path: "2002/Bilder/Nollning", name: "Ä&&P", thumbnails: ["https://minio.api.dsek.se/members/public/ja2732jo-s/hampton184.png", "https://minio.api.dsek.se/members/public/mi4766si-s/PANA47707510.JPG"] }
    ],
    resources: [
        { path: "2002/Bilder/Nollning", name: "0000.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ph3883ni-s/Screenshot_2024-02-24-21-47-38-07_92460851df6f172a4592fca41cc2d2e6270.jpg" },
        { path: "2002/Bilder/Nollning", name: "0001.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ka6337fr-s/62083049.jpg" },
        { path: "2002/Bilder/Nollning", name: "0002.jpg", thumbnail: "https://minio.api.dsek.se/members/public/mi4300lj-s/f%C3%B6r_hemsidan1872.jpg" }
    ],
    cognates: [2002]
};

const fake_Nollegasque: Album = {
    path: "2002/Bilder/Nollning",
    name: "Nollegasque",
    albums: [],
    resources: [
        { path: "2002/Bilder/Nollning/Nollegasque", name: "0000.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ax0272ha-s/epic%20bild2340.png" },
        { path: "2002/Bilder/Nollning/Nollegasque", name: "0001.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ja0765an-s/IMG_48581916.jpeg" }
    ],
    cognates: []
};

const fake_ÄOOP: Album = {
    path: "2002/Bilder/Nollning",
    name: "Ä&&P",
    albums: [],
    resources: [
        { path: "2002/Bilder/Nollning/Ä&&P", name: "0000.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ja2732jo-s/hampton184.png" },
        { path: "2002/Bilder/Nollning/Ä&&P", name: "0001.jpg", thumbnail: "https://minio.api.dsek.se/members/public/mi4766si-s/PANA47707510.JPG" }
    ],
    cognates: []
};

export const load: PageLoad = ({ params }) => {
    // Redirect to current year if the path is empty
    if (params.path === "") {
        const year = new Date().getFullYear();
        redirect(301, `archive/${year}`);
    }

    // temp, fake data
    switch (params.path) {
        case "2002/Bilder/Nollning": return fake_Nollning;
        case "2002/Bilder/Nollning/Nollegasque": return fake_Nollegasque;
        case "2002/Bilder/Nollning/Ä&&P": return fake_ÄOOP;
    }

    const splitPath = params.path.split("/");
    return {
        path: splitPath.slice(0, -1).join("/"),
        name: splitPath.at(-1),
        albums: [],
        resources: [],
        cognates: [2002]
    };
};
