import {trpc} from "../trpc";
import {prisma} from "../prismaClient";
import {Employee, Department} from "@prisma/client";
import {number, object, string, z} from 'zod'

export const employeeRouter = trpc.router({
    list: trpc.procedure.query(()=>{
        return prisma.employee.findMany();
    }),
    add: trpc.procedure
        .input(z.object({
            name:string(),
            surname:string(),
            position:string(),
            departmentId:number().nullable(),
        }))
        .mutation(({input})=>{
            return prisma.employee.create({
                data:{
                    name:input.name,
                    surname:input.surname,
                    position:input.position,
                    departmentId: input.departmentId ?? null
                }
            })
        }),
    delete: trpc.procedure
        .input(z.number())
        .mutation(({input})=>{
            return prisma.employee.delete({where:{id : input}})
        })
})

