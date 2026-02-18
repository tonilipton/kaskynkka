// Order schema
export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {name: 'orderId', type: 'string', title: 'Order ID', options: {slugify: source => source.orderId}},
    {name: 'customerName', type: 'string', title: 'Customer Name'},
    {name: 'items', type: 'array', of: [{type: 'reference', to: [{type: 'menuItem'}]}], title: 'Items'},
    {name: 'total', type: 'number', title: 'Total (€)'},
    {name: 'status', type: 'string', title: 'Status', options: {list: ['Pending','Confirmed','Ready','Cancelled']}}
  ]
}
