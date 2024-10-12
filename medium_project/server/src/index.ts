import { Hono } from 'hono'
import { userRoutes } from './routes/user.routes'
import { blogRoutes } from './routes/blog.routes'
import { cors } from 'hono/cors'
const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
    JWT_SECRET : string
  }
}>()

// Middleware logic
app.use('/*', cors())
app.route('/api/v1/user', userRoutes);
app.route('/api/v1/blog', blogRoutes)

// chech

export default app
