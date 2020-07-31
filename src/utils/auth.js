import { User } from '../nodes/user/user_model.js';

export const signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).send({data: newUser});
    } catch (error) {
        console.error(error);
        return res.status(424).send({error: `Internal server error.`});
    }
}

export const signin = async (req, res) => {
    const failMessage = `Invalid username or password.`;

    if (!req.body.username || !req.body.password) 
        return res.status(400).send({error: `username and password are required`});

    try {
        const user = await User
            .findOne({username: req.body.username})
            .select(`password`)
            .exec();

        if (!user) return res.status(400).send({error: failMessage});

        const passwordMatch = user.checkPassword(req.body.password);

        if (!passwordMatch) return res.status(400).send({error: failMessage});

        // here is where you should registrer a session for the user or send a token 
        // but for the purpose of this sample I have sent a success message to the user
        return res.status(200).send({data: {message: `login success`}});  
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: failMessage});
    }
} 