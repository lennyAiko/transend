module.exports = async function (req, res, proceed) {
    var token;

    if (req.headers && req.headers.authorization) {
        var parts = req.headers.authorization.split(' ')
        if (parts.length === 2) {
            var scheme = parts[0]
            var credentials = parts[1]

            if(/^Bearer$/i.test(scheme)) {
                token = credentials
            }
        } else {
            return res.status(401).json({ err: 'Format is Authorization: Bearer [token]' })
        }
    } else {
        return res.status(401).json({ err: 'No Authorization header was found' })
    }

    

    if (token) {
        jwToken.verify(token, async function(err, decode) {

            if (err || !decode) {
                return res.status(401).json('Invalid token')
            }
            const userTokenRecord = await TokenStore.findOne({email: decode.user.email})
            if (userTokenRecord) {
                if (token === userTokenRecord.token) {
                    let userRecord = await User.findOne({ id: decode.user.id }).populate('wallet')
                    req.profile = {data: userRecord, issuer: decode.issuer}
                } else {
                    return res.status(401).json('Invalid token')
                }
            }
            proceed()
        })
    } else {
        return res.status(401).json({err: 'Not authenticated'})
    }
}