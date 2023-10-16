import {initTRPC} from "@trpc/server";

// создаем tRPC роутер для дальнейшего его использования в приложении
const t = initTRPC.create()


export const router = t.router;
export const publicProcedure = t.procedure;