module.exports.rateLimit = {
    windowMs: 1 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: true,
    statusCode: 429
}