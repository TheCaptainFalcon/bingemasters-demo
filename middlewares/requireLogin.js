module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: "Unauthorized Access - You must be logged in!" })
    }

    next();
};