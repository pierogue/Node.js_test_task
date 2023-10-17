import {initTRPC} from "@trpc/server";

// создаем tRPC роутер для дальнейшего его использования в приложении
export const trpc = initTRPC.create()


export const publicProcedure = trpc.procedure;