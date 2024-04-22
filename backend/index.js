import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import booksRoute from "./routes/booksRoute.js"
import cors from "cors";


const app = express();


// Middleware for parsing request body
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"],
//     })
// )

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack');
});



app.use('/books', booksRoute);




mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on ${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error);
    });