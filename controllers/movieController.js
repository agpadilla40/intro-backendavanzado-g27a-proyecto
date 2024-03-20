import Movie from '../models/Movie.js';

const createMovie = async (req, res) => {

    try {
        const newMovie = await Movie.create(req.body);
        res.json(newMovie);
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating movie', 
            error,
        });
    }
};

const getAllMovies = async (req, res) => {
    const movies = await Movie.find({
        isDeleted: false
    });
    res.json(movies);
};

const getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.movieId);
    res.json(movie);
};

const updateMovie = async (req, res) => {
    const { movieId } = req.params;
    const updatedMovie = await Movie.updateOne(
        {
          _id: movieId,
        }, 
        req.body
    );
    res.json(updatedMovie);
    };

    const deleteMovie = async (req, res) => {
        
        const deletedMovie = await Movie.findByIdUpdate(
            
            req.params.movieId,

            {
              isDeleted: true,
            }, 

            {
                new: true,
            }
        );

        res.json(deletedMovie);
    }
    

export { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie };