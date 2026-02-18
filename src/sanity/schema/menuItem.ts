// MenuItem schema
export default {
  name: 'menuItem',
  type: 'document',
  title: 'Menu Item',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'category', type: 'reference', to: [{type: 'category'}], title: 'Category'},
    {name: 'price', type: 'number', title: 'Price (€)'},
    {name: 'description', type: 'text', title: 'Description', rows: 3},
    {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
    {name: 'inStock', type: 'boolean', title: 'In Stock', initialValue: true}
  ]
}
