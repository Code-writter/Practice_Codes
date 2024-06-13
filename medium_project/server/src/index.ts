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


// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYmZmOGQ4ZjEtMDMwNy00YTZjLWFiZGEtOGQ5OTgwNDJkN2QwIiwidGVuYW50X2lkIjoiMjBkMDMyNTYxZGNjMDA0Njc3MzhjZDE4MDVhNGRkOWFmN2YxYThjYjc4NzY4NDc0M2Y3MGQ3MDRkNDFjY2RiYyIsImludGVybmFsX3NlY3JldCI6IjNmNDIwNDRlLWM0ZDktNDlkNy04MGEwLWVmYjhjNDM2MjVlNiJ9.yJfp2UyIwk_iMBsdVteTakOWicAf6ZfT9cErE5bG5fw"

export default app
