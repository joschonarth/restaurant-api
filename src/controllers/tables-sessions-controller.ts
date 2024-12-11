import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/app-error";
import { knex } from "@/database/knex";
import { z } from "zod"

class TablesSessionsController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                table_id: z.number(),
            })

            const { table_id } = bodySchema.parse(request.body)

            const session = await knex<TablesSessionsRepository>("tables_sessions")
                .where({ table_id })
                .orderBy("opened_at", "desc")
                .first()

                if (session && !session.closed_at) {
                    throw new AppError("This table is already open")
                }

            await knex<TablesSessionsRepository>("tables_sessions")
                .insert({
                    table_id,
                    opened_at: knex.fn.now()
                })

            return response.status(201).json()
        } catch (error) {
            next(error)
        }
    }

    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const sessions = await knex<TablesSessionsRepository>("tables_sessions").orderBy("closed_at")

            return response.json(sessions)
        } catch (error) {
            next(error)
        }
    }
}

export { TablesSessionsController }