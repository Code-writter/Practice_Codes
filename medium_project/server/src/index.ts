import { Hono } from 'hono'
import { userRoutes } from './routes/user.routes'
import { blogRoutes } from './routes/blog.routes'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
    JWT_SECRET : string
  }
}>()

// Middleware logic

app.route('/api/v1/user', userRoutes);
app.route('/api/v1/blog', blogRoutes)



export default app
