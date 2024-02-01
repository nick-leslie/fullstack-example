import express, {Router} from "express";
import {feedback, feedbackRequest} from "common/src/feedbackTypes.ts";
import client from "../bin/database-connection.ts";

const router:Router = express.Router();


router.get("/",async (req,res) => {
    const feedback = await client.feedback.findMany({
        include: {
            employee: {

            }
        }
    });
    res.status(200).json(feedback);
});

router.post("/",async (req,res) => {
    const feedbackRequest:feedbackRequest = req.body;

   await client.feedback.create({
       data: {
           feedback:feedbackRequest.feedback,
           employee: {
               connectOrCreate: {
                   where: {
                       name:feedbackRequest.name
                   },
                   create: {
                       name:feedbackRequest.name
                   }
               }
           }
       }
   });

    res.status(200).json({
        message:"added db object",
    });
});

export default router;
