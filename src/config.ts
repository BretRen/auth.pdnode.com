import {Client} from 'appwrite';

export const client: Client = new Client();
export const app_url: string = "http://localhost:5173"

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('68818c2a0030f23462fe'); // Replace with your project ID