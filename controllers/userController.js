import User from '../models/User.js';

const createUser = async (req, res) => {

    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating user', 
            error,
        });
    }
};

const getAllUsers = async (req, res) => {
    const users = await User.find({
        isDeleted: false
    });
    res.json(users);
};

const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId);
    res.json(user);
};

const updateUser = async (req, res) => {
    const { userId } = req.params;
    const updatedUser = await User.updateOne(
        {
          _id: userId,
        }, 
        req.body
    );
    res.json(updatedUser);
    };

    const deleteUser = async (req, res) => {
        
        const deletedUser = await User.findByIdAndUpdate(
            
            req.params.userId,

            {
              isDeleted: true,
            }, 

            {
                new: true,
            }
        );

        res.json(deletedUser);
    }
    

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };