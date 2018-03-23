const express = require('express');
const router = express.Router();

//-------Overwrite default layout for admin-----
//----anythin after url </admin> will get this layout-----
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});

//------don't need to use </admin>---------
//------get post page-------
router.get('/create', (req, res) => {
    res.render('admin/posts/create');
});
//----------post data
router.post('/create', (req, res) => {
    res.send('worked');
});

module.exports = router;