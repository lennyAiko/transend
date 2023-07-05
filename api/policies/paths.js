module.exports = async function (req, res, proceed) {
    sails.log(`${req.method} - ${req.url}`);
    return proceed();
};
  