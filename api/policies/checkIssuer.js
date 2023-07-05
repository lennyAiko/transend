module.exports = async function (req, res, proceed) {
    const issuer = sails.config.issuer || process.env.ISSUER
    if (req.profile.issuer !== issuer) {
        console.log(typeof req.profile.issuer, typeof sails.config.issuer);
        return res.status(401).json('Send a valid token!')
    }
    proceed()
}