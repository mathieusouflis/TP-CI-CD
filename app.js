import express from 'express';
import mongoose from 'mongoose';
import itemRoutes from './routes/items.js';  
import { connectDB } from './database/db.js';  

const app = express();
const port = 3000;

// middleware parse JSON 
app.use(express.json());

// Connectio DB
connectDB();


app.get('/', (req, res) => {
  res.send('Welcome to the Items API!');
});


app.use('/items', itemRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
