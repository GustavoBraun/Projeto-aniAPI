import {animesIndex, singleAnime} from '../controller/animeController.js'
import express from 'express'

// Camada de rotas
    const router = express.Router()

    // Rota principal, retorna todos os animes.
    router.get("/", animesIndex)

    // Rota para retornar somente 1 anime
    router.get("/:MAL_ID", singleAnime)

export default router