module.exports = {
  friendlyName: "History",

  description: "Transaction history.",

  exits: {
    success: {
      statusCode: 200,
      description: "Transaction history retrieved successfully.",
    },
    notFound: {
      statusCode: 404,
      description: "User wallet not found.",
    },
    error: {
      statusCode: 400,
      description: "An error occurred while fetching transaction history.",
    },
  },

  fn: async function (_, exits) {
    try {
      const transactions = await Transaction.find({
        user: this.req.profile.data.email,
      });
      return exits.success({ transactions: transactions });
    } catch (error) {
      sails.log(error);
      throw new Error("An error occurred while fetching transaction history.");
    }
  },
};
