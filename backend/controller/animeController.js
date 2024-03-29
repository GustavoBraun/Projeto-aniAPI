import { getAllAnimes } from '../repository/animeRepository.js'
import { getAnimeById } from "../services/anime.service.js";

export const animesIndex = (req, res) => {
    getAllAnimes((animes) => {
        console.log(animes)
        return res.status(200).json(animes)
    })
}

export const singleAnime = (req, res) => {
    const id = req.params.MAL_ID
    try {
        getAnimeById(id, (data) => {
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}