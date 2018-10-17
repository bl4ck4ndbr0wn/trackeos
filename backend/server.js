require("dotenv").config();
const app = require("express")();
const cors = require("cors");
const demux = require("./demux");
const trackeosRoute = require("./api/trackeos/trackeos.route");
const io = require("./utils/io");

app.use(cors());

app.use("/trackeos", trackeosRoute);

const port = process.env.PORT;

const server = app.listen(port, () =>
  console.info(`trackeos Dapp listening on port ${process.env.PORT}!`)
);

io.connect(server);

demux.watch();
