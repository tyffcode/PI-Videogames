const { Videogame, Genres } = require("../db");

async function postGames(req, res) {
  const {
    name,
    released,
    description,
    platforms,
    background_image,
    rating,
    genres,
  } = req.body;

  try {
    if (
      !name ||
      !description ||
      !platforms ||
      !background_image ||
      !rating ||
      !genres ||
      !released
    ) {
      throw new Error("Missing data.");
    }

    const findingGame = await Videogame.findOne( { where: { name: name } });

    if (findingGame) {
      throw new Error(
        "This game already exists. Try again using another name."
      );
    }

    for (let i = 0; i < genres.length; i++) {
      const genre = await Genres.findOne({
        where: {
          name: genres[i],
        },
      });

      if (!genre) {
        throw new Error("You have entered a genre that does not exist.");
      }
    }

    const newGame = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      rating,
      released,
    });

    for (let i = 0; i < genres.length; i++) {
      const genre = await Genres.findOne({
        where: {
          name: genres[i],
        },
      });
      await newGame.addGenres(genre.id);
    }

    const returnCreatedGame = await Videogame.findOne({
      where: { id: newGame.id },
      include: [
        {
          model: Genres,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json(returnCreatedGame);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = postGames;



























// const { Videogame, Genres } = require("../db");

// async function postGames(req, res){
//     const {
//         name,
//         released,
//         descripcion,
//         platforms,
//         background_image,
//         rating,
//         genres,
//     } = req.body;

//     try {
//         if(
//             !name ||
//             !descripcion ||
//             !platforms ||
//             !background_image ||
//             !rating ||
//             !genres ||
//             !released
//         ){
//             throw new Error("Perdida de Data");
//         }
//         const findingGame = await Videogame.findOne({where: {name:name} });
        
//         if(findingGame){
//             throw new Error(
//                 "This game alredy exists. Try again using another name"
//             );
//         }

//         for(let i = 0; i < genres.length; i++){
//             const genres = await Genres.findOne({
//                 where: {
//                     name: genres[i],
//                 },
//             });

//             if(!genres){
//                 throw new Error("You have entered a genre that does not exist");
//             }
//         }


//         const newGame = await Videogame.create({
//             name,
//             descripcion,
//             platforms,
//             background_image,
//             rating,
//             released
//         });

//         for(let i = 0; i < genres.length; i++){
//             const genres = await Genres.findOne({
//                 where: {
//                     name: genres[i],
//                 },
//             });
//             await newGame.addGenres(genres.id);
//         }

//         const returnCreatedGame = await Videogame.findOne({
//             where: {id: newGame.id},
//             include: [
//                 {
//                     model: Genres,
//                     attributes: ['name'],
//                     through: { attributes: [] }
//                 },
//             ],
//         });

//         return res.status(200).json(returnCreatedGame);

//     } catch (error) {
//         return res.status(400).json( { error: error.message } );
//     }
// }

// module.exports = postGames;