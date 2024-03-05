import { getAllAnimes } from '../../repository/animeRepository.js'
import { db } from '../../config/db.js'
import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    console.log(getAllAnimes());
    return getAllAnimes((results) => {
        res.json(results)
    })
})

export default router

// router.get("/", (req, res) => {
//     res.render("admin/index")
// })

// router.get("/posts", (req, res) => {
//     res.send("Página de posts.")
// })

// router.get("/categorias", (req, res) => {
//     res.render("admin/categorias")
// })

// router.get('/categorias/add', (req, res) => {
//     res.render("admin/addcategoria")
// })

// router.post('/categorias/new', (req, res) => {
//     var erros = []

//     if(!req.body.nome || !req.body.slug) {
//         erros.push({text: "Nome ou slug inválidos."})
//     }

//     if (erros.length > 0) {
//         res.render("admin/addcategoria", {erros: erros})
//     } else {
//         const novaCategoria = {
//             nome: req.body.nome,
//             slug: req.body.slug
//         }    
//         new Categoria(novaCategoria).save()
//         .then(() => {
//             req.flash("success_msg", "Categoria criada com sucesso.")
//             res.redirect("/admin/categorias")
//         })
//         .catch((err) => {
//             req.flash("error_msg", "Falha ao criar categoria.")
//             console.log("Erro ao salvar a categoria. " + err)
//         })
        
//     }
// })

// module.exports = router