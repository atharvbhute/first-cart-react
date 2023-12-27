import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.account = new Account(this.client);
  }

  async createAccount({ username, email, password }) {
    try {
      await this.account.create(ID.unique(), email, password, username);
      return await this.loginUser({email, password});
    } catch (error) {
      console.log("Error :",error);
    }
  }

  async loginUser({email, password}) {
    try {
      return await this.account.createEmailSession(email,password);      
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      const currentUser = await this.account.get();
      return currentUser;
    } catch (error) {
      console.log("method error: ", error);
      return null;
    }
    
  }

  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log(error);
      return null
    }
  }
}
const authService = new AuthService();
export default authService;
