import express from 'express'
import multer from 'multer'
import session from 'express-session'
import * as signupAPI from './routes/signup'
import * as getUsersAPI from './routes/getUserMe'
import * as loginAPI from './routes/login'
import * as createPostAPI from './routes/posts/createPost'
import * as getPostsAPI from './routes/posts/getPosts'
import * as getPostAPI from './routes/posts/getPost'
import * as getPostsHTMLAPI from './routes/posts/getPostHTML'
import * as updatePostAPI from './routes/posts/updatePost'
import * as deletePostAPI from './routes/posts/deletePost'
import * as mainPage from './routes/views/index'
import * as viewPage from './routes/views/view'

interface Route {
  path: string
  method: 'post' | 'get' | 'put' | 'delete'
  handler: Function
}

const routes: Route[] = [
  signupAPI,
  getUsersAPI,
  loginAPI,
  createPostAPI,
  getPostsAPI,
  getPostAPI,
  getPostsHTMLAPI,
  updatePostAPI,
  deletePostAPI,

  // pages
  mainPage,
  viewPage
]

declare module 'express-session' { // express-session 모듈 안에 있는 type을 수정하겠다.
  interface SessionData { // express-session 안에 있는 SessionData 값을 만지겠다.
    _id: string
  }
}

export async function startServer (): Promise<void> {
  const app = express()
  const upload = multer({ dest: 'static/' })

  app.set('view engine', 'ejs')
  app.set('views', './src/views')

  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    secret: 'cat keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }))

  // server middlewares
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(upload.fields([{ name: 'ooo' }]))
  app.use('/static', express.static('./src/static'))

  routes.forEach(({ path, method, handler }) => {
    app[method](path, (req, res, next) => {
      handler(req, res)
        .then(() => {
          next()
        })
        .catch((err: any) => {
          next(err)
        })
    })
  })

  const port = 3300
  await new Promise((resolve) => {
    app.listen(port, (): void => {
      resolve(null)
    })
  })
  console.log('Server is ready!')
}
