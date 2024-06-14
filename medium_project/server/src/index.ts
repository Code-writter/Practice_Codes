import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/edge'
import { verify, sign, decode } from 'hono/jwt'
import { use } from 'hono/jsx'


const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
    JWT_SECRET : string
    email : string
  }
}>()

// Middleware logic
app.use('/api/v1/blog/*', async (c, next) => {
  
  const headers = c.req.header("authorization") || "";
  //extracting the token from headers
  const token = headers.split(" ")[1]
  //@ts-ignore
  const response = await verify(token, c.env.JWT_SECRET)
  if(response.id){
    await next();
  } else {
    return c.json({
      status : 403,
      error: " unauthorized"
    })
  }
})


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
  //@ts-ignore
  const user = await prisma.User.create({
      data:{
        //@ts-ignore
        email : body.email,
        //@ts-ignore
        password : body.password
      }
  })
  console.log(user)
  if(!user){
    return c.json({
        status : 404,
        msg :" user not created"
    })
  }
  
  const token = await sign({id : user.id} , c.env.JWT_SECRET)
  console.log(token)
  if(!token){
    return c.json({
      msg : "TOken not created"
    })
  }

  return c.json({
    token
  })
})

app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()

  const user = await prisma.user.findUnique({
    //@ts-ignore
      where :{
        email : body.email,
        password : body.password
      }
  })

  if(!user){
    return c.json({
      msg : "User not found"
    })
  }

  const token = sign({email : user.email}, c.env.JWT_SECRET)

  return c.json({
    msg :" Sigin successfull",
    token
  })

})

app.post('/api/v1/blog', (c) => {

})

app.put('/api/v1/blog', (c) => {

})

app.get('/api/v1/blog/:id', (c) => {

})


export default app
