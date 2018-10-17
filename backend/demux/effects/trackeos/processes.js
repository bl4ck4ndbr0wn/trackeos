function processes(context, payload) {
  const processes = {
    _id: payload.data.id
  };
  context.socket.emit("process", processes);
}

module.exports = processes;
