const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

// @route  POST api/users
// @desc   Register user
// @access Public
router.post(
  '/', 
  [
    check('name', 'İsim gereklidir.').not().isEmpty(),
    check('email', 'Geçerli bir mail gereklidir.').isEmail(),
    check('password', 'Şifreniz minumum 8 karakter içermelidir.').isLength({min: 8})
  ], 
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array()})
    }
    res.send('User route')
  });

module.exports = router;