import express from 'express';
import Item from '../models/item.js';

const router = express.Router();

// GET /items 
router.get('/', async (req, res) => {
  try {
    const items = await Item.find(); 
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /items 
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newItem = new Item({ name, description, price });
    await newItem.save(); 
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

