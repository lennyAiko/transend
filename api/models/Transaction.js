/**
 * Transactions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "string",
      unique: true,
      required: true,
    },

    amount: {
      type: "number",
      required: true,
    },

    user: {
      model: "user",
    },

    description: {
      type: "string",
      required: true,
    },
  },
  customToJSON: function () {
    return _.omit(this, ["createdAt", "updatedAt", "user"]);
  },
};
