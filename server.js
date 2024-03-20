import { connect } from './config.js'; 
import express from "express";
import movieRoutes from './routes/movieRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import userRoutes from './routes/userRoutes.js';

connect();

const api = express();

api.use(express.json());

api.listen(8000, () => 
    console.log("API running on port 8000")
);

api.get('/test', (req, res) => {
    res.send('Mensajes en terminal funcionando');    
});

api.use('/movies', movieRoutes);
api.use("/tickets", ticketRoutes);
api.use("/users", userRoutes);

