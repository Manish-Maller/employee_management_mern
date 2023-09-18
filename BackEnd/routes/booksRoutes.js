const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const {getBooks,getBooksByID,deleteBooks, postBooks,updateBooks} = require('../controllers/booksController');
const routes = express.Router()

routes.route("/").get(getBooks).post(postBooks)
routes.route("/:id").put(updateBooks).delete(deleteBooks).get(getBooksByID)

module.exports = routes