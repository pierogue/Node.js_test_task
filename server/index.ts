//импортируем клиент призмы, который сформировался у нас после выполнения миграции
import {PrismaClient} from '@prisma/client'

//импортируем tRPC роутер для дальнейшего использования
import {publicProcedure, router} from './trpc'

import { createHTTPServer } from '@trpc/server/dist/adapters/standalone';



const prisma = new PrismaClient()

const arr = [1, 2, 3, 4]

//определяем наш роутер
const appRouter = router({
    // в параметрах прописываем наши процедуры
    getArr: publicProcedure
        //обработчик input отвечает за пользовательский ввод
        //внутри него мы проводим валидацию
        .input((val:unknown)=>{
            if(typeof val == "number") return val;
            throw new Error('Invalid input');
        })
        //query же отвечает за обработку нашего запроса
        .query((i )=>{
            const {input} = i;
            return arr[input];
        })
})

const server = createHTTPServer({
    router:appRouter
})

server.listen(3000)

async function main(){
    const dep = await prisma.employee.create({
        data:{
            name:"alex",
            surname:"keistut",
            position:"CEO"
        }
    })
    console.log(dep)

}

// main()
//     .then(async ()=>{
//     await prisma.$disconnect()
//     })
//     .catch(async (e)=>{
//         console.error(e);
//         await prisma.$disconnect()
//         process.exit(1)
//     })

//экспортируем ТИП данных нашего роутера
export type AppRouter = typeof appRouter