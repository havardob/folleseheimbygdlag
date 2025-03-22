import {defineCollection} from 'astro:content';
import {getSiteSettingsData} from "../data/siteSettings.ts";
import {getSubPagesData} from "../data/subPages.ts";
import {getNewsArticlesData} from "../data/newsArticle.ts";
import {getPagesData} from "../data/pages.ts";

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

const pagesCollection = defineCollection({
    loader: async () => {
        const response = await getPagesData();
        return response.map((page: any) => ({
            id: page._id,
            ...page
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

export const collections = {
    "siteSettings": siteSettingsCollection,
    "subPages": subPagesCollection,
    "newsArticles": newsArticlesCollection,
    "pages": pagesCollection
};