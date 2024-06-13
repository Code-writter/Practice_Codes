import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/extension'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
  }
}>()


// const prisma = new PrismaClient({
//   datasourceUrl : env.DATABASE_URL,
// }).$extends(withAccelerate())


app.get('/', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json() 

  await prisma.User.create({
      data:{
        email : c.body.email,
        //@ts-ignore
        password : c.body.password
      }
  })

})

app.post('/api/v1/signin', (c) => {

})

app.post('/api/v1/blog', (c) => {

})

app.put('/api/v1/blog', (c) => {

})

app.get('/api/v1/blog/:id', (c) => {

})


export default app
