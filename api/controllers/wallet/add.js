module.exports = {
  friendlyName: "Initiate",

  description: "Initiate add.",

  inputs: {
    amount: {
      type: "number",
      required: true,
      min: 0,
    },
  },
  exits: {
    success: {
      statusCode: 200,
      description: "Money added successfully.",
    },
    badRequest: {
      statusCode: 400,
      description: "Invalid amount.",
    },
  },
  fn: async function (inputs, exits) {
    const { amount } = inputs;

    try {
      const wallet = await Wallet.findOne({ user: this.req.profile.data.id });

      if (!wallet) {
        throw "badRequest";
      }

      if (amount <= 0) {
        throw "badRequest";
      }

      wallet.balance += amount;
      await Wallet.updateOne({ id: wallet.id }).set(wallet);
      await Transaction.create({
        id: await sails.helpers.uuidGenerator(),
        user: this.req.profile.data.email,
        amount,
        description: `You added ${amount} to your account`,
      });

      return exits.success({ message: "Money added successfully." });
    } catch (error) {
      sails.log.error(error);
      return exits[error]({ message: "Invalid amount." });
    }
  },
};
