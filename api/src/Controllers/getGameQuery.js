const { getAllGames } = require("../Controllers/getAllGames");

const getGameQuery = async (req, res) => {
  try {
    const { name } = req.query;
    const getVideoGamesQuery = await getAllGames();

    const nameQuery = name
      ? getVideoGamesQuery.filter((g) =>
          g.name.toLowerCase().includes(name.toLowerCase())
        )
      : getVideoGamesQuery;

    if (nameQuery.length === 0) {
      return res.status(404).json("NO SE ENCONTRO");
    }

    res.status(200).json(nameQuery);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = getGameQuery;