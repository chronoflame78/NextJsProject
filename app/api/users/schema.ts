import {z} from 'zod';

export const schema = z.object({
    name: z.string().min(3),
    //email: z.string().email(),
    //age: z.number().int().min(18).max(120),
})