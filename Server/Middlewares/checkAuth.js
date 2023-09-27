const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
   
    const authToken = req.cookies.authToken;

    if (!authToken) {
        return res.status(401).json({ 'message': 'Authentication Failed. Please Login To Continue' });
    }

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({ 'message': 'Authentication token is not valid' });
    }
};

module.exports = checkAuth;
