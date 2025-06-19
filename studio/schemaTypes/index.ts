import siteSettings from './siteSettings'
import frontPage from './frontPage'
import subPage from './subPage'
import page from './page'
import newsArticle from './newsArticle'
import newsArchive from './newsArchive'
import eventArchive from './eventArchive'
import eventPage from './eventPage'

export const schemaTypes = [
  frontPage,
  page,
  subPage,
  newsArticle,
  newsArchive,
  eventPage,
  eventArchive,
  siteSettings,
]
