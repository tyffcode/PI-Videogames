const { Router } = require('express');

const genresRouter = Router();

genresRouter.get("/", (req, res) => {
    res.send("hello, genres");
});

module.exports = genresRouter;