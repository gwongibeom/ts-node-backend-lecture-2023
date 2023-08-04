import express from 'express'
import multer from 'multer'
import {
  path as signupPath,
  method as signupMethod,
  handler as signupHandler
} from './routes/signup'

async function startSever (): Promise<void> {
  const port = 3300

  const app = express()
  const upload = multer({ dest: 'static/' })

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(upload.fields([{ name: 'ooo' }]))
  app.use('/static', express.static('static'))
  app[signupMethod](signupPath, signupHandler)
  app.post('/signup', () => {})

  await new Promise((resolve) => {
    app.listen(port, (): void => {
      resolve(undefined)
    })
  })
  console.log('server on')
}

export { startSever }
