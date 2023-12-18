const conf = {
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionIdAddress: String(import.meta.env.VITE_APPWRITE_COLLECTION_ADDRESS),
    appwriteCollectionIdProducts : String(import.meta.env.VITE_APPWRITE_COLLECTION_PRODUCTS),
    appwriteCollectionIdCategories : String(import.meta.env.VITE_APPWRITE_COLLECTION_CATEGORIES),
    appwriteCollectionIdCart : String(import.meta.env.VITE_APPWRITE_COLLECTION_CART),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf