import express from 'express'
import { insertUser } from '../models/user/UserModel.js';

const router = express.Router();

// User signup
router.post("/", async (req, res, next) => {
    try{
        // get the user obj
        // encrypt the password
        // insert the user
        const user = await insertUser(req.body)

        user?._id ?
        res.json({
            status: "success",
            message: "Your account has been created, you may login now!",
        })
        :
        res.json({
            status: "error",
            message: "Error creating user. Please try again!"
        });
  } catch (error) {
        res.json({
            status: "error",
            message: error.message,
    })
  }
});

// User Login

// User Profile


export default router
