const { Router } = require('express');
const getGameQuery  = require('../Controllers/getGameQuery');
const getGamesParams = require('../Controllers/getGamesParams');
const getGenres = require('../Controllers/getGenres');
const postGames = require('../Controllers/postGames');
//const morgan = require('morgan');

//Routing
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const videogamesRouter = require('./videogames');
// const genresRouter = require('./genres');
//middlewares

const router = Router();

router.get('/videogames', getGameQuery);
router.get('/videogames/:idVideogame', getGamesParams);
router.get('/genres', getGenres);
router.post('/videogames', postGames);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;