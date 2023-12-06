import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
try {
    // getting all data from DB
    const products = await Product.find();

    // making loop on data to get each product stat with promise.all to ensure if product failed will return error
    const productsWithStats = await Promise.all(
    products.map(async (product) => {
        const stat = await ProductStat.find({
        productId: product._id,
        });
        return {
        ...product._doc,
        stat,
        };
    })
    );

    res.status(200).json(productsWithStats);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};
