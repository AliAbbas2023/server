const Product = require("../Model/product");

const getAllProducts = async (req, res) => {
  const product = await Product.find({ featured: true });
  res.status(200).json({ product });
};

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "pr0oducts testing route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
