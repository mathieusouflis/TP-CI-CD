import express from 'express';
import mongoose from 'mongoose';
import Item from './routes/items.js'; 

const app = express();
const port = 3000;


app.use(express.json());

// Connexion à MongoDB
const dbURI = 'mongodb://localhost:27017/my_project_db'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connecté avec succès');
  })
  .catch((err) => {
    console.log('Erreur de connexion à MongoDB:', err);
  });

// GET /items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find(); // chercher tous les items dans la collection
    res.json(items); // retourner les items sous forme de JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /items - recevoir un objet et le sauvegarder dans la DB
app.post('/items', async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    const newItem = new Item({
      name,
      description,
      price,
    });

    await newItem.save(); 

    res.status(201).json(newItem); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
