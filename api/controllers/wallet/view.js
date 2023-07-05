module.exports = {
  friendlyName: "View",

  description: "View wallet.",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let walletRecord = await Wallet.findOne({ user: this.req.profile.data.id });

    // All done.
    return walletRecord;
  },
};
