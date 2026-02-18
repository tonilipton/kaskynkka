import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurantInfo',
  type: 'document',
  title: 'Restaurant Info',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'businessId', type: 'string', title: 'Business ID'},
    {name: 'address', type: 'string', title: 'Address'},
    {name: 'phone', type: 'string', title: 'Phone'},
    {name: 'email', type: 'string', title: 'Email'},
    {name: 'website', type: 'url', title: 'Website'},
    {name: 'owner', type: 'string', title: 'Owner'},
    {name: 'openingHours', type: 'string', title: 'Opening Hours'},
    {name: 'services', type: 'array', of: [{type: 'string'}], title: 'Services'},
    {name: 'googleReviews', type: 'number', title: 'Google rating'},
    {name: 'testimonials', type: 'array', of: [{type: 'string'}], title: 'Testimonials'},
    {name: 'menuHighlights', type: 'array', of: [{type: 'string'}], title: 'Menu Highlights'}
  ]
})
