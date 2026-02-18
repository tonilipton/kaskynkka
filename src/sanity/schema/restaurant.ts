// Sanity schema for restaurant basic info
export default {
  name: 'restaurant',
  type: 'document',
  title: 'Restaurant',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'businessId', type: 'string', title: 'Business ID'},
    {name: 'address', type: 'string', title: 'Address'},
    {name: 'phone', type: 'string', title: 'Phone'},
    {name: 'email', type: 'string', title: 'Email'},
    {name: 'website', type: 'url', title: 'Website'},
    {name: 'owner', type: 'string', title: 'Owner'},
  ]
}
