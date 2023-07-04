module.exports = {
  attributes: {
    id: {
      type: "string",
      required: true,
      unique: true,
    },
    balance: {
      type: "number",
      defaultsTo: 0,
    },
    user: {
      model: "user",
      unique: true,
    },
    transactions: {
      collection: "transaction",
      via: "wallet",
    },
  },
  customToJSON: function () {
    return _.omit(this, ["createdAt", "updatedAt", "user"]);
  },
};
