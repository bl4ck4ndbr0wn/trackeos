function addhandler(payload, context) {
  const handler = {
    username: payload.data.username,
    first_name: payload.data.first_name,
    last_name: payload.data.last_name
  };

  context.socket.emit("addhandler", handler);
}

module.exports = addhandler;
