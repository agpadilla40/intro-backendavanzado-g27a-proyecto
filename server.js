import express from "express";

const api = express();

api.listen(8000, () => {
    console.log("Server running on port 8000");
});

