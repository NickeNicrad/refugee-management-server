exports.adminMiddleware = (req, res, next) =>
{
    if (req.user.role !== 'admin') throw res.status(400).json("vous n'etes pas autorisé(e) d'effectuer cette opération");
    next();
}

exports.userMiddleware = (req, res, next) =>
{
    if (req.user.role !== 'user') throw res.status(400).json("vous n'etes pas autorisé(e) d'effectuer cette opération");
    next();
}