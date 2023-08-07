const { Router } =require("express");

const videogamesRouter = Router();

videogamesRouter.get("/", (req,res) => {
    res.send('hello, videogames');
});

// videogamesRouter.get(":idVideogame", (req,res) => {
//     const idVideogame = req.params;
//     res.send(`detalle del videogame ${idVideogame}`);
// });

module.exports = {
    videogamesRouter,
}