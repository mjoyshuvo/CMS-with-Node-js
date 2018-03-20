const express = require('express');
const router = express.Router();

//-------Overwrite default layout for admin-----
//----anythin after url </admin> will get this layout-----
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});
//------don't need to use </admin>---------
router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard');
});
module.exports = router;