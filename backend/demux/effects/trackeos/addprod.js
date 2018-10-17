function addprod(context, payload) {
  const product = {
    _id: payload.data.id,
    initiator: payload.data.processor,
    product_name: payload.data.name,
    product_producer: payload.data.producer_name
  };

  context.socket.emit("addprod", product);
}

module.exports = addprod;
