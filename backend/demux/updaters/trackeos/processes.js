async function processes(state, payload) {
  try {
    processDetails = {};
    processDetails.processes = {
      _id: payload.data.id,
      processor: payload.data.processor,
      product_name: payload.data.name,
      product_producer: payload.data.producer_name,
      productConfirmed: true
    };

    await state.product
      .findOneAndUpdate(
        { _id: processDetails.processes._id },
        { $set: processDetails },
        { new: true }
      )
      .exec();
  } catch (err) {
    console.error(err);
  }
}

module.exports = processes;
