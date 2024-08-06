require("dotenv").config();
require("./db/connection.js");

const Book = require("./db/models/bookmodel.js");

const express = require("express");
const app = express();

app.use(express.json());

app.post("/books/addbook", async (req, res) => {

    const result = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    });

    console.log(result);

    const responseMessage = {
        message: `Book ${req.body.title}added`,
        dbresponse: result
    }


    res.status(201).send(responseMessage);
});

app.listen(5001, () => {console.log("Server is listening on port 5001")});