import {prisma} from "./prismaClient";

import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express'

import {appRouter} from "./routes";

import cors from 'cors'

const app = express();

app.use(cors())

app.use('/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
    })
);

app.listen(3000,()=>{
    console.log("running on http://localhost:3000")
});



