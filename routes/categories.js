const express = require('express')
const { catchErrors } = require('../handlers/errorHandlers')
const router = express.Router()

/* GET courses listing. */
router.get('/', catchErrors(async function (req, res, next) {
  res.render('categories', { title: 'Categories' })
}))

module.exports = router