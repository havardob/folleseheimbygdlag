import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'folleseheimbygdlag',
  api: {
    projectId: 'qd5ip3k2',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
