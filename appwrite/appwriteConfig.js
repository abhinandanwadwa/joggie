import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63cc25a586dd7c7abacb")

export const account = Account(client);

//Database
var dataId = "63cc26413d370c1bca1b";
export const databases = new Databases(client, dataId)