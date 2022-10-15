import ProductEntity from "../../../domain/productEntity";
import ProductRepository from "../../../domain/productRepository";
import ProductModel from "./productSchema";


export default class ProductMongoRepository implements ProductRepository {
  public save = async (product: ProductEntity) => {
    const productCreated = await ProductModel.create(product)

    return productCreated
  }

  public getAll = async () => {
    const products = await ProductModel.find({}).lean()

    return products as ProductEntity[]
  }

  public getById = async (uuid: string) => {
    const product = ProductModel.findOne({ uuid }).lean()

    return product
  }
}