import { Router } from "express";
import prisma from "../helpers/prisma";
import { Station } from "@prisma/client";

const router = Router({mergeParams: true});
export default () => {
    router.get("/", async (_, res) => {
        const stations: Station[] = await prisma.station.findMany()
        console.log("Stations: ", stations)
        res.status(200).json(stations)
    })

    return router;
}