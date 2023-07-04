/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "string",
      unique: true,
      required: true
    },
    email: {
      type: "string",
      required: true,
      isEmail: true,
      unique: true
    },
    name: {
      type: "string",
      required: true
    },
    password: {
      type: "string",
      required: true
    },
    wallet: {
      collection: "wallet",
      via: "user"
    }
  },
  customToJSON: function () {
    return _.omit(this, ["password", "createdAt", "updatedAt"]);
  },
};
