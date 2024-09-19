import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, featuredimage, userid, status, slug }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          userid,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: createPost :: error " + error);
    }
  }

  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: updatePost :: error " + error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite error :: deletePost :: error " + error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite error :: getPost :: error " + error);
      return false;
    }
  }

  async getPosts(quaries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        quaries
      );
    } catch (error) {
      console.log("Appwrite error :: get :: error " + error);
      return false;
    }
  }

  // file upload service ----------

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        );
    } catch (error) {
        console.log("Appwrite error :: uploadFile :: error " + error);
        
    }
  }

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        );
        return true;
    } catch (error) {
        console.log("Appwrite error :: deleteFile :: error " + error);
        return false;
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    );
  }

}

const service = new ServiceWorker();
export default service;
