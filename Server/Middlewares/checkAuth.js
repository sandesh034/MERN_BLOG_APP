const jwt = require('jsonwebtoken');
const sendResponse = (status, message, data) => {
    return ({ status, message, data })
}
const checkAuth = async (req, res, next) => {

    const authToken = req.cookies.authToken;

    if (!authToken) {
        return res.status(401).json(sendResponse(false,'Authentication Failed. Please Login To Continue' ));
    }

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        res.status(200).json(sendResponse(true, 'Authentication Success'));
        next();
    } catch (err) {
        return res.status(401).json(sendResponse(false,'Authentication token is not valid'));
    }
};

module.exports = checkAuth;
