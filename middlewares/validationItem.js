export const validateItem = (req, res, next) => {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    next();
};