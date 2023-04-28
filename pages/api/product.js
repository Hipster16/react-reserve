import Product from "../../models/Product"
import connectDb from "../../utils/connectDb"

connectDb()

export default async (req, res) => {
    const { _id } = req.query
    const product = await Product.findOne({ _id: _id })
    res.status(200).json(product)
}