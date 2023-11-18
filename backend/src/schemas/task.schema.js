import { z } from 'zod'

const postTaskSchema = z.object({

    title: z.
        string({
            required_error: 'Title is required'
        }),
    description: z.
        string({
            required_error: 'Description is required'
        }),
    date: z.
        string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional()


})



export {
    postTaskSchema

}