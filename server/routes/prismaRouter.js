const express = require('express');
const router = express.Router();
const prismaUserController = require('../controllers/prismaUserController.js');
const prismaSightingController = require('../controllers/prismaSightingController.js')

router.get('/', (req, res) => {
  res.status(200).send("your are reaching sql endpoint")  
}
);

/**
 * User routes
 */

// creates a user in the prisma database
router.post('/user', prismaUserController.addUser,(req, res) => {
  res.status(200).json(res.locals.user);
  }
);

// gets a user from the prisma database given the username
router.get('/user', prismaUserController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
})

// deletes a user from the prisma database given the username
router.delete('/user', prismaUserController.deleteUser, (req, res) => {
  res.status(200).json(res.locals.user);
})

/**
 * sighting routes
 */

// creates a sighting in the prisma db
router.post('/sighting', prismaSightingController.addSighting,(req, res) => {
  res.status(200).json(res.locals.sighting);
})

module.exports = router;