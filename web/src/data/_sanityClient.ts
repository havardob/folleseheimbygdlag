import { createClient } from "@sanity/client";

const config = {
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || 'qd5ip3k2',
    dataset: import.meta.env.SANITY_STUDIO_DATASET || '',
    apiVersion: '2023-07-06',
    useCdn: false,
}

export const client = createClient(config);