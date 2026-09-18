//Mon deuxieme server Node.js
//importer express

//importer les routes pour les produits
const productRoutes = require("./routes/products");

const express = require("express");

//creer une instance de notre serveur
const dbmysql = require("./config/db");

const server = express();
//utiliser les routes pour les produits

server.use("/", productRoutes);

//instanccier l'objet express
//Middleware pour renvoyer des reponses en JSON
server.use(express.json());
//cree la route GET permet de recuperer les donnees
//route racine pour les API est "/"
server.get("/", (req, res) => {
    //fonction callback REQUEST/REPONSE qui sera executée lorsque l'on fera en GET 
    //sur la route racine "/"
    res.setHeader("Content-Type", "text/html");
    res.status(200).send("<h1>Bienvenue sur notre APIProduits du 26.09</h1>");
});

//server qui ecoute le port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

productRoutes.get("/products", (req, res) => {
    //requete SQL pour recuperer tous les produits
    const sql = "SELECT * FROM products";
    dbmysql.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Erreur lors de la récupération des produits" });
        }else {
            res.status(200).json(results);
        }
    });
});