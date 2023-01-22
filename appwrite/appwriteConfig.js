import { Client, Account, Databases } from 'appwrite';


var dataId = "63cc26413d370c1bca1b";
const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63cc25a586dd7c7abacb")
export const account = Account(client);

//Database
export const databases = new Databases(client, dataId);
