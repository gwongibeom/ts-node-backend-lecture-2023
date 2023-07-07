import express from 'express'

const app = express()
const port = 3300

app.use('/static', express.static('static'))

interface User {
  name: string
  age: number
}

const db: User[] = []

console.log(db)

app.get('/', (req, res) => {
  return res.json(db)
})

app.post('/', (req, res) => {
  const name = req.query.name
  const age = req.query.age

  if (typeof name !== 'string') {
    return res.send('Error:"name"은 string이 아닙니다.')
  }
  if (typeof age !== 'string') {
    return res.send('Error:"age"은 유효한 값이 아닙니다.')
  }

  const numberAge = parseInt(age)

  if (Number.isNaN(numberAge)) {
    return res.send('Error:"age"은 유효한 값이 아닙니다.')
  }

  db.push({
    name,
    age: numberAge
  })

  return res.json(db)
})

app.put('/:targetName', (req, res) => {
  const targetName = req.params.targetName
  const name = req.query.name
  const age = req.query.age

  if (typeof targetName !== 'string') {
    return res.send('Error:"targetName"은 string이 아닙니다.')
  }
  if (typeof name !== 'string') {
    return res.send('Error:"name"은 string이 아닙니다.')
  }
  if (typeof age !== 'string') {
    return res.send('Error:"age"은 유효한 값이 아닙니다.')
  }

  const numberAge = parseInt(age)
  if (Number.isNaN(numberAge)) {
    return res.send('Error:"age"은 유효한 값이 아닙니다.')
  }

  const index = db.findIndex(user => user.name === targetName)
  if (db[index] === undefined) {
    return res.send('Error:존재하지 않는 유저입니다.')
  }

  db[index].name = name
  db[index].age = numberAge

  return res.json(db)
})

app.delete('/:targetName', (req, res) => {
  const targetName = req.params.targetName

  if (typeof targetName !== 'string') {
    return res.send('Error:"targetName"은 string이 아닙니다.')
  }

  const index = db.findIndex(user => user.name === targetName)
  if (db[index] === undefined) {
    return res.send('Error:존재하지 않는 유저입니다.')
  }
  delete db[index]

  return res.json({})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
