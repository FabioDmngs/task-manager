function requireAuth(req, res, next) {
    if (!req.session.userId) {
        return res.redirect('/login'); // Corrigido aqui
    }
    next();
}

module.exports = { requireAuth };
