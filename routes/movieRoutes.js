import express from 'express';
import {createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie} from '../controllers/movieController.js';

const movieRoutes = express.Router();

movieRoutes.route('/').post(createMovie).get(getAllMovies);
movieRoutes.route('/:movieId').get(getMovieById).put(updateMovie).delete(deleteMovie);


export default movieRoutes;