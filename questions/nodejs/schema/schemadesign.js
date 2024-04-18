// - productId
// - product name
// - description
// - quantity
// - sku
// - reviews
// - added by
// - added on
// - updated on

const TaskSchema = new Mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  sku: { type: Number, required: true },
  review: [{}],
  addesOn: { type: String, required: true },
  updatedOn: { type: String, required: true },
});
