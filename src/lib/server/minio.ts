import { Client } from "minio";
import { PUBLIC_MINIO_ENDPOINT, PUBLIC_MINIO_PORT, PUBLIC_MINIO_USE_SSL } from "$env/static/public";
import { MINIO_ROOT_USER, MINIO_ROOT_PASSWORD } from "$env/static/private";

const minio = new Client({
    endPoint: PUBLIC_MINIO_ENDPOINT || "localhost",
    port: PUBLIC_MINIO_PORT
        ? Number.parseInt(PUBLIC_MINIO_PORT, 10)
        : PUBLIC_MINIO_USE_SSL === "true"
            ? 443
            : 80,
    useSSL: PUBLIC_MINIO_USE_SSL === "true",
    accessKey: MINIO_ROOT_USER || "",
    secretKey: MINIO_ROOT_PASSWORD || "",
});

export default minio;