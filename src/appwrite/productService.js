import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

class ProductService {
  client = new Client();
  databases;
  storage;

  constructor() {
    console.log(conf.appwriteURL, conf.appwriteProjectId);
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client)

  } // constructor to create client and database everytime the instace is creted to use in methods

  // add products
  async createProduct({ product_name : name, brand, price, category_id, description , image }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdProducts,
        ID.unique(),
        { name, brand, price, category_id, image, description}
      );
    } catch (error) {
        console.log(error);
    }
  } // this method/ features return an object with product details

  // updateProduct
  async updateProduct({product_id, data = {}}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdProducts,
            product_id,
            data
        )        
    } catch (error) {
        console.log(error);        
    }
  }// this method/ features return an object with updated product details

  // delete product
  async deleteProduct({product_id}){
    try {
        return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdProducts,
            product_id,
        )        
    } catch (error) {
        console.log(error); 
    }
  }

  // list all products // return an array with all products objects
  async getProducts(){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdProducts,
        )        
    } catch (error) {
        console.log(error); 
    }
  }

  // get a single product by id // returns an object
  async getProduct({product_id}){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdProducts,
            product_id
        )
    } catch (error) {
        console.log(error); 
    }
  }

  // get product by category // return object in an with document array with product objects
  async getProductByCategory({category_id}, ...query){
    try {
        console.log(category_id);
        return this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdProducts,
            [
                Query.equal('category_id', [category_id]),
                ...query
            ]
        )
    } catch (error) {
        console.log(error);
    }    
  }

  async listCategories(){
    try {
      const categories = await this.databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionIdCategories,
      )
      console.log(categories.documents);
      return categories.documents;
  } catch (error) {
      return error;
  }
  }

  async uploadImage(file){
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      return error;
    }
  }

  async getFilePreview(){
    
  }
} 

export const productService = new ProductService();
