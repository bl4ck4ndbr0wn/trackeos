async function addprod(state, payload) {
  const Product = state.product;
  try {
    let product = await Product.find({
      _id: payload.data.id
    }).exec();

    // if handler already exists do not insert it in again
    if (product.length !== 0) return;

    product = new Product({
      _id: payload.data.id,
      initiator: payload.data.processor,
      product_name: payload.data.name,
      product_producer: payload.data.producer_name,
      productConfirmed: true
    });

    await product.save();
  } catch (err) {
    console.error(err);
  }
}

module.exports = addprod;
