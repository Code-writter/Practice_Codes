import zod, { string } from 'zod'

export const signupInput = zod.object({
    email : string().email(),
    password : string().min(6),
    name : string().optional()
})

export const signInInput = zod.object({
    email : string().email(),
    password : string().min(6)
})

export const blogInput = zod.object({
    title : string().max(20),
    content : string().max(400)
})


export const updateBlog = zod.object({
    title : string().max(20),
    content : string().max(400),
    authorId : string()
})

export type SignupInput = zod.infer<typeof signupInput>
export type SignInInput = zod.infer<typeof signInInput>
export type BlogInput = zod.infer<typeof blogInput >
export type UpdateBlog = zod.infer<typeof updateBlog >