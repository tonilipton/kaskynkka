// Sanity schema index
import {defineConfig} from 'sanity'
import studioTheme from '../theme'
import restaurant from './restaurant'
import category from './category'
import menuItem from './menuItem'
import order from './order'
import restaurantInfo from './restaurantInfo'

export default defineConfig({
  name: 'kaskynkka',
  title: 'Kaskynkka Sanity',
  projectId: 'your_project_id',
  dataset: 'production',
  schema: {
    types: [restaurant, category, menuItem, order, restaurantInfo]
  },
  studio: {theme: studioTheme}
})
