//connexion a la base de donnees
const db = require('mysql2');
//parametres de connexion a la base de donnes
const dbmysql = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moser_adryen_product_db',
    port: 3307
});

dbmysql.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connexion à la base de données réussie');
});