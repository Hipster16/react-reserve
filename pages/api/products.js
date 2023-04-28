import Product from '../../models/Product';
import connectDb from '../../utils/connectDb';

connectDb()

export default async (req, res) => {
    console.log("request")
    const products =await Product.find()
    res.status(200).json(products)
};