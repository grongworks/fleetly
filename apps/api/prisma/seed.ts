import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

const cars = ["Opel", "Ford", "Mercedes", "Bugatti"]

Promise.all(cars.map(car => prisma.car.create({
    data: { model: car }
})))