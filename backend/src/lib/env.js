import dotenv from "dotenv";
dotenv.config({quiet: true});//terinmal when you env variables are missing it will not show error
//as well it will not load .env file in production mode


export const ENV = {

    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    
    

}