module.exports = async function(req, res, proceed) {
    res.set({
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'deny',
        'Allow': ['GET', 'POST'],
        'Accept': 'application/json'
    });
    proceed();
}