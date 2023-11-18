import { z } from 'zod'

const registerSchema = z.object({

    username: z.
        string({
            required_error: 'Username is required'
        }),
    email: z.
        string({
            message: 'Email is required'
        })
        .email({
            message: 'Invalid Email'
        }),
    password: z.
        string({
            required_error: 'Password is required'
        })
        .min(8, {
            message: 'Password must be at least 8 characters'
        })

})

const loginSchema = z.object({

    email: z.
        string({
            message: 'Email is required'
        })
        .email({
            message: 'Invalid Email'
        }),
    password: z.
        string({
            required_error: 'Password is required'
        })
        .min(8, {
            message: 'Password must be at least 8 characters'
        })

})

export {
    registerSchema,
    loginSchema
}