import express from 'express'

const app = express()
const port = 3300

app.use('/static', express.static('static'))

// interface User {
//   name: string
//   age: number
// }

// const db: User[] = []

// console.log(db)

app.get('/', (req, res) => {
  const name = req.query.name
  let stringName = ''

  if (typeof name === 'string') stringName = name
  if (Array.isArray(name)) stringName = name.join(', ')

  console.log(req.query)
  res.send('this is get' + stringName)
})

app.post('/', (req, res) => {
  res.send('this is post')
})

app.put('/', (req, res) => {
  res.send('this is put')
})

app.delete('/', (req, res) => {
  res.send('this is delete')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
