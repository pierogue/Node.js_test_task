import {trpc} from "../trpc";
import {departmentRouter} from "./departmentRouter";
import {employeeRouter} from "./employeeRouter";

export const appRouter = trpc.router({
    department: departmentRouter,
    employee: employeeRouter
})

export type AppRouter = typeof appRouter