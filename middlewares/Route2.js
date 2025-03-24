import express from 'express';
import { connectDB } from '../database/db.js'; // Import de la connexion MongoDB
import mongoose from 'mongoose';

// Initialiser Express
const app = express();
app.use(express.json()); // Middleware pour traiter les requêtes JSON

// Définir le schéma et le modèle Mongoose pour les "items"
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

const Item = mongoose.model('Item', itemSchema);

// Route GET /items : retourne la liste des objets depuis MongoDB
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find(); // Récupérer tous les objets
        res.json(items); // Retourner les objets au format JSON
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des données', error: err });
    }
});

// Route POST /items : reçoit un objet et le sauvegarde dans MongoDB
app.post('/items', async (req, res) => {
    try {
        const newItem = new Item(req.body); // Créer un nouvel objet basé sur le modèle
        await newItem.save(); // Sauvegarder dans la base MongoDB
        res.status(201).json({ message: 'Objet sauvegardé', item: newItem });
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la sauvegarde', error: err });
    }
});

// Connexion à MongoDB et démarrage du serveur
connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Serveur lancé sur http://localhost:3000');
    });
}).catch(err => {
    console.error('Impossible de démarrer le serveur à cause de la connexion à MongoDB', err);
});