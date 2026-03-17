import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Endpoint de Appwrite Cloud
    .setProject('69b94bd400190310f510'); // Tu Project ID recuperado del código

export const account = new Account(client);
export { ID };