import { connect } from './config.js'; 
import express from "express";

connect();

const api = express();

api.listen(8000, () => {
    console.log("API running on port 8000");
});

api.get('/test', (req, res) => {
    
});

