import { db } from "../config/db.js";

export const getAllAnimes = (callback) => {
    const q = "SELECT * FROM animes"
    db.query(q, (err, data) => {
        if(err) console.log("Erro: " + err);
        return callback(data)
    })
}

export const getAnimeById = (id) => {
    const q = "SELECT * FROM animes WHERE MAL_ID = ?"
    db.query(q, [id], (err, data) => {
        if (err) console.log("Erro: " + err);
        return data
    })
}

export const getAnimeByName = (name) => {    
    const q = "SELECT * FROM animes WHERE Name = ?"
    db.query(q, [name], (err, data) => {
        if (err) console.log("Erro: " + err);
        return data
    })
}

export const getAnimeByGenre = (genre) => {
    const q = "SELECT * FROM animes WHERE Genres LIKE '%?%'"
    db.query(q, [genre], (err, data) => {
        if (err) console.log("Erro: " + err);
        return data
    })
}

export const deleteAnimeById = (id) => {
    const q = "DELETE FROM animes WHERE MAL_ID = ?"
    db.query(q, [id], (err, data) => {
        if (err) console.log("Erro: " + err);
        return data
    })
}

export const addNewAnime = (values) => {
    const q = "INSERT INTO animes (`Name`, `Score`, `Genres`, `sypnopsis`) VALUES (?, ?, ?, ?)"
    db.query(q, [...values], (err, data) => {
        if (err) console.log("Erro: " + err);
        return data
    })
}

export const updateAnimeById = (values, id) => {
    const q = "UPDATE `animesdb`.`animes` SET `Name` = ?, `Score` = ?, `Genres` = ?, `sypnopsis` = ? WHERE `MAL_ID` = ?"
    db.query(q, [...values, id, (err, data) => {
        if (err) console.log("Erro: " + err);
        return data
    }])
}