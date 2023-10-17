import {trpc} from "../trpc";
import {prisma} from "../prismaClient";
import {number, object, string, z} from 'zod'

export const departmentRouter = trpc.router({
    list: trpc.procedure.query(()=>{
        return prisma.department.findMany();
    }),
    add: trpc.procedure
        .input(z.object({name:string(), headId:number(), description:string().nullable() }))
        .mutation(({input})=>{
            return prisma.department.create({
                data:{
                    name:input.name,
                    headId:input.headId,
                    description:input.description
                }
            })
        }),
    delete: trpc.procedure
        .input(z.number())
        .mutation(({input})=>{
            prisma.employee.updateMany({where:{departmentId:input}, data:{departmentId:null}})
            return prisma.department.delete({where:{id : input}})
        })
})

