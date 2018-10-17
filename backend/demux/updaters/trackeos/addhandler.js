async function addhandler(state, payload) {
  const Handler = state.handler;
  try {
    let handler = await Handler.find({
      username: payload.data.username
    }).exec();

    // if handler already exists do not insert it in again
    if (handler.length !== 0) return;

    handler = new Handler({
      username: payload.data.username,
      first_name: payload.data.first_name,
      last_name: payload.data.last_name,
      handlerConfirmed: true
    });

    await handler.save();
  } catch (err) {
    console.error(err);
  }
}

module.exports = addhandler;
