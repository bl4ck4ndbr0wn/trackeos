const Trackeos = require("./handler.model");

/**
 * Get list of all Trackeos confirmed by the blockchain
 * @returns {Trackeos[]}
 */
const listConfirmed = async (req, res) => {
  try {
    const confirmedTrackeoses = await Trackeos.find({
      trackeosConfirmed: true
    }).exec();
    res.send(confirmedTrackeoses);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { listConfirmed };
