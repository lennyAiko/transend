const jwt = require('jsonwebtoken')
require("dotenv").config();

const access_token_secret = sails.config.access_token_secret || process.env.ACCESS_TOKEN_SECRET
const refresh_token_secret = sails.config.refresh_token_secret || process.env.REFRESH_TOKEN_SECRET
const magic_token_secret = sails.config.magic_token_secret || process.env.MAGIC_TOKEN_SECRET

module.exports = {
  'sign': function (payload) {
    const access = jwt.sign(payload, access_token_secret, { expiresIn: "1h" });
    const refresh = jwt.sign(payload, refresh_token_secret, { expiresIn: "2d" });
    return { access, refresh };
  },
  'verify': function (token, cb) {
    return jwt.verify(token, access_token_secret, {}, cb);
  },
  'refresh': function (payload) {
    const access = jwt.sign(payload, access_token_secret, { expiresIn: "1h" });
    return access;
  },
  'verifyRefresh': function (token, cb) {
    return jwt.verify(token, refresh_token_secret, {}, cb);
  },
  'magic': function (payload) {
    const magic = jwt.sign(payload, magic_token_secret, { expiresIn: "1h" });
    return magic;
  },
  'magicVerify': function(token, cb) {
    return jwt.verify(token, magic_token_secret, {}, cb);
  }
}