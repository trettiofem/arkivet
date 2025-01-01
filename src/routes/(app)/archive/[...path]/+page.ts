import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Album } from "$lib/types";
import type { Resource } from "@prisma/client";

const fake_Nollning: Album = {
    path: "2002/Bilder",
    name: "Nollning",
    type: "IMAGE",
    albums: [
        { path: "2002/Bilder/Nollning", name: "Nollegasque", thumbnail: "https://minio.api.dsek.se/members/public/ax0272ha-s/epic%20bild2340.png", updated: new Date(435782343433) },
        { path: "2002/Bilder/Nollning", name: "Ä&&P", thumbnail: "https://minio.api.dsek.se/members/public/ja2732jo-s/hampton184.png", updated: new Date(435782343433) }
    ],
    resources: [
        { path: "2002/Bilder/Nollning", name: "0000.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ph3883ni-s/Screenshot_2024-02-24-21-47-38-07_92460851df6f172a4592fca41cc2d2e6270.jpg", updated: new Date(435782343433), size: 2321312 },
        { path: "2002/Bilder/Nollning", name: "0001.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ka6337fr-s/62083049.jpg", updated: new Date(435782343433), size: 2321312 },
        { path: "2002/Bilder/Nollning", name: "0002.jpg", thumbnail: "https://minio.api.dsek.se/members/public/mi4300lj-s/f%C3%B6r_hemsidan1872.jpg", updated: new Date(435782343433), size: 2321312 }
    ],
    cognates: [2002]
};

const fake_Nollegasque: Album = {
    path: "2002/Bilder/Nollning",
    name: "Nollegasque",
    type: "IMAGE",
    albums: [],
    resources: [
        { path: "2002/Bilder/Nollning/Nollegasque", name: "0000.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ax0272ha-s/epic%20bild2340.png", updated: new Date(435782343433), size: 2321312 },
        { path: "2002/Bilder/Nollning/Nollegasque", name: "0001.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ja0765an-s/IMG_48581916.jpeg", updated: new Date(435782343433), size: 2321312 }
    ],
    cognates: []
};

const fake_ÄOOP: Album = {
    path: "2002/Bilder/Nollning",
    name: "Ä&&P",
    type: "IMAGE",
    albums: [],
    resources: [
        { path: "2002/Bilder/Nollning/Ä&&P", name: "0000.jpg", thumbnail: "https://minio.api.dsek.se/members/public/ja2732jo-s/hampton184.png", updated: new Date(435782343433), size: 2321312 },
        { path: "2002/Bilder/Nollning/Ä&&P", name: "0001.jpg", thumbnail: "https://minio.api.dsek.se/members/public/mi4766si-s/PANA47707510.JPG", updated: new Date(435782343433), size: 2321312 }
    ],
    cognates: []
};

const fake_files: Album = {
    path: "2004",
    name: "Dokument",
    type: "FILE",
    albums: [
        { path: "2004/Dokument", name: "viktigt", updated: new Date(435782343433) },
        { path: "2004/Dokument", name: "Homework", updated: new Date(435782343433) }
    ],
    resources: [
        { path: "2004/Dokument", name: "doc.pdf", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "doc2.docx", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "42.zip", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "LOGO.final.png", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "meme.jpg", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "6ix9ine_greatest_hits.mp3", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "MAIN.C", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "main.cpp", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "main.ts", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "main.lua", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "index.html", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "data.json", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "homework2.mp4", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "database.xls", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "virus.exe", updated: new Date(435782343433), size: 2321312 },
        { path: "2004/Dokument", name: "bruh", updated: new Date(435782343433), size: 2321312 }
    ],
    cognates: []
};

export const load: PageLoad = ({ params, url }) => {
    // Redirect to current year if the path is empty
    if (params.path === "") {
        const year = new Date().getFullYear();
        redirect(301, `archive/${year}`);
    }

    const view = url.searchParams.get("view");
    if (view) {

    }

    // temp, fake data
    switch (params.path) {
        case "2002/Bilder/Nollning": return fake_Nollning;
        case "2002/Bilder/Nollning/Nollegasque": return fake_Nollegasque;
        case "2002/Bilder/Nollning/Ä&&P": return fake_ÄOOP;
        case "2004/Dokument": return fake_files;
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
