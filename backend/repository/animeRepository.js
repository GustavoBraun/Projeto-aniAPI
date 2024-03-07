import { db } from "../config/db.js";

export function getAllAnimes (callback) {
    const q = "SELECT * FROM animes"
    db.query(q, (err, data) => {
        if(err) console.log("Erro: " + err)
       return callback(data)
    })
}

export const getAnimeById = (id, callback) => {
    const q = "SELECT * FROM animes WHERE MAL_ID = ?"
    db.query(q, [id], (err, data) => {
        if (err) console.log("Erro: " + err);
        if (data.length == 0) {
            throw new Error('Anime não encontrado.')
        }
        return callback(data)
    })
}

export const getAnimeByName = (name, callback) => {    
    const q = "SELECT * FROM animes WHERE Name = ?"
    db.query(q, [name], (err, data) => {
        if (err) console.log("Erro: " + err);
        return callback(data)
    })
}

export const getAnimeByGenre = (genre, callback) => {
    const q = "SELECT * FROM animes WHERE Genres LIKE '%?%'"
    db.query(q, [genre], (err, data) => {
        if (err) console.log("Erro: " + err);
        return callback(data)
    })
}

export const deleteAnimeById = (id) => {
    const q = "DELETE FROM animes WHERE MAL_ID = ?"
    db.query(q, [id], (err, data) => {
        if (err) console.log("Erro: " + err);
        return data
    })
}

export const addNewAnime = (values, callback) => {
    const q = "INSERT INTO animes (`Name`, `Score`, `Genres`, `sypnopsis`) VALUES (?, ?, ?, ?)"
    db.query(q, [...values], (err, data) => {
        if (err) console.log("Erro: " + err);
        return callback(data)
    })
}

export const updateAnimeById = (values, id, callback) => {
    const q = "UPDATE `animesdb`.`animes` SET `Name` = ?, `Score` = ?, `Genres` = ?, `sypnopsis` = ? WHERE `MAL_ID` = ?"
    db.query(q, [...values, id, (err, data) => {
        if (err) console.log("Erro: " + err);
        return callback(data)
    }])
}