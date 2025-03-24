import Item from '../models/item.js';

export const createItem = async (data) => {
  const newItem = new Item(data);
  await newItem.save();
  return newItem;
};