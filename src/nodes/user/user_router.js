import { Router } from 'express';
import { updateOne, getOne, me } from './user_controller.js';

const userRouter = Router();

userRouter.put(`/:id`, updateOne);
userRouter.get(`/:id`, getOne);
userRouter.get(`/`, me);

export default userRouter;