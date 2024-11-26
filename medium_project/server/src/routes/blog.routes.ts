
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/edge'
import { Hono } from "hono";
import { verify } from 'hono/jwt';

export const blogRoutes = new Hono<{
    Bindings :{
        DATABASE_URL : string,
        JWT_SECRET : string
        
    },
    Variables :{
        id : string
    }
}>()

interface Blog {
    title : string
    content : string
    authorId : string
}


//authenticating all the blog routes
blogRoutes.use('/*', async (c, next) => {
  
    const headers = c.req.header("authorization") || "";
    //extracting the token from headers
    const token = headers.split(" ")[1]

    const response = await verify(token, c.env.JWT_SECRET)
    if(response){
        //@ts-ignore
        c.set('id', response.id )
        await next();
    } else {
      return c.json({
        status : 403,
        error: " unauthorized"
      })
    }
})

blogRoutes.post('/create', async (c) => {

    const body : Blog = await c.req.json();
    const id  = c.get('id')
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    console.log('creating the blog')
    console.log(`${id}, Type of id : ${typeof(id)}`)
    //@ts-ignore
    const blog = await prisma.post.create({
        data :{
            title : body.title,
            content : body.content,
            authorId : id
        }
    })

    return c.json({
        id : blog.id
    })
})

blogRoutes.put('/update', async (c) => {
    const body : Blog = await c.req.json();
    const id = c.get('id')
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where : {
            id : body.id 
        },
        data :{
            title : body.title,
            content : body.content,
            authorId : id
        }
    })

    return c.json({
        id : blog.id
    })
})

blogRoutes.get('/find', async (c) => {
    const body = await c.req.json();
    
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where : {
                id : body.id
            }
        })
    
        return c.json({
            blog
        })
    } catch (error) {
       c.json({
            status : 400,
            msg : "Error while getting the blogs"
       }) 
    }

})
//idealy we should add pagination i.e. return first 10 blogs
blogRoutes.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.findMany()

    return c.json({
        blog
    })
})