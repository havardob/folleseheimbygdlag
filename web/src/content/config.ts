import {defineCollection} from 'astro:content';
import {getSiteSettingsData} from "../data/siteSettings.ts";
import {getSubPagesData} from "../data/subPages.ts";

const siteSettingsCollection = defineCollection({
    loader: async () => {
        const siteSettings = await getSiteSettingsData();
        return [{
            id: siteSettings._id,
            ...siteSettings
        }];
    }
});

const subPagesCollection = defineCollection({
    loader: async () => {
        const response = await getSubPagesData();
        return response.map((subPage: any) => ({
            id: subPage._id,
            ...subPage
        }));
    }
});

export const collections = {
    "siteSettings": siteSettingsCollection,
    "subPages": subPagesCollection
};