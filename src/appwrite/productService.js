import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf";
// adding products
// edit products
// delete products
// displaying products

class ProductService {
  client = new Client();
  databases;

  constructor() {
    console.log(conf.appwriteURL, conf.appwriteProjectId);
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);

  }

  async createProduct({ name, brand, category_id, description , image }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdProducts,
        ID.unique(),
        { name, brand, category_id, image, description}
      );
    } catch (error) {
        console.log(error);
    }
  }
}

export const productService = new ProductService();
