require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const { Genres } = require("../db");

const getGenres = async (req, res) => {

    try {
        const URL_BASE = `https://api.rawg.io/api/genres?key=${API_KEY}`;

        let getGenresApi = await axios.get(URL_BASE);
        
        const genres = getGenresApi.data.results.map((genres) => genres.name)
        
        genres.forEach((element) => {
            Genres.findOrCreate({ where: { name: element} });
        });

        const AllGenres = await Genres.findAll();
        res.status(200).json(AllGenres);
    } catch (error) {
        res.status(404).json({message: "Error"});
    }
    

}

module.exports = getGenres;