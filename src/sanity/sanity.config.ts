import {defineConfig} from 'sanity'
import studioTheme from './theme'
import restaurant from './schema/restaurant'
import category from './schema/category'
import menuItem from './schema/menuItem'
import order from './schema/order'

export default defineConfig({
  name: 'kaskynkka',
  title: 'Kaskynkka Sanity',
  projectId: 'your_project_id',
  dataset: 'production',
  schema: {
    types: [restaurant, category, menuItem, order]
  },
  studio: {
    theme: studioTheme
  }
})
