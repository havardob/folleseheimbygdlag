import {defineCollection} from 'astro:content';
import {getSiteSettingsData} from "../data/siteSettings.ts";
import {getSubPagesData} from "../data/subPages.ts";
import {getNewsArticlesData} from "../data/newsArticle.ts";
import {getEventPagesData} from "../data/eventPage.ts";

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

const newsArticlesCollection = defineCollection({
    loader: async () => {
        const response = await getNewsArticlesData();
        return response.map((newsArticle: any) => ({
            id: newsArticle._id,
            ...newsArticle
        }))
    }
})

const eventCollection = defineCollection({
    loader: async () => {
        const response = await getEventPagesData();
        return response.map((eventPage: any) => ({
            id: eventPage._id,
            ...eventPage
        }))
    }
})

export const collections = {
    "siteSettings": siteSettingsCollection,
    "subPages": subPagesCollection,
    "newsArticles": newsArticlesCollection,
    "events": eventCollection
};