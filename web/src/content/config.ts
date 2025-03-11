import {defineCollection} from 'astro:content';
import {getSiteSettingsData} from "../data/siteSettings.ts";

const siteSettingsCollection = defineCollection({
    loader: async () => {
        const siteSettings = await getSiteSettingsData();
        return [{
            id: siteSettings._id,
            ...siteSettings
        }];
    }
});

export const collections = {
    "siteSettings": siteSettingsCollection
};