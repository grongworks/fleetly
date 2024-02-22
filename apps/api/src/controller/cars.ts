import { Router } from "express";
import prisma from "../helpers/prisma";
import { Car } from "@prisma/client";

const router = Router({mergeParams: true});
export default () => {
    router.get("/", async (_, res) => {
        const cars: Car[] = await prisma.car.findMany()
        console.log("CARS NEW", cars)
        res.status(200).json({...cars})
    })

    return router;
}