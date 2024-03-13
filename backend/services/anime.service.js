import { getAllAnimes, findById } from '../repository/animeRepository.js'

export const getAnimeById = (id, callback) => {
    const data = findById(id);
    
    console.log(data)

    if (data.length == 0) {
        throw new Error('Anime não encontrado.')
    }

    return callback(data);
}