const addhandler = require("./addhandler");
// const updateh = require("./updateh");
const addprod = require("./addprod");
const processes = require("./processes");

const account = process.env.EOSIO_CONTRACT_ACCOUNT;

module.exports = [
  {
    actionType: `${account}::addhandler`, //account::action name
    effect: addhandler
  },
  // {
  //   actionType: `${account}::updateh`, //account::action name
  //   effect: updateh
  // },
  {
    actionType: `${account}::addprod`, //account::action name
    effect: addprod
  },
  {
    actionType: `${account}::process`, //account::action name
    effect: processes
  }
];
