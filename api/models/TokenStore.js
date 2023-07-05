/**
 * TokenStore.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "string",
      required: true,
    },
    token: {
      type: "string",
      required: true,
      maxLength: 300,
    },
    refreshToken: {
      type: "string",
      required: true,
      maxLength: 300,
    },
    email: {
      type: "string",
      required: true,
      isEmail: true,
      unique: true
    },
    toExpire: {
      type: "string",
      required: true,
    },
  },
};
