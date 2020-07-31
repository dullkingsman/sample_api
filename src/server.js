import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import { connect } from './utils/db.js';
import { signin, signup } from './utils/auth.js';
import userRouter from './nodes/user/user_router.js';


export const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan());

app.get(`/api`, (req, res) => {
    res.send({ data: `Sample API` });
});

app.post(`/api/signin`, signin);
app.post(`/api/signup`, signup);
app.use(`/api/user`, userRouter);

export const start = async () => {
    try {
        await connect();
        app.listen(3000, () => {
            console.log("Listening on 3000/api ...");
        })
    } catch (error) {
        console.error(error);
    }
} 