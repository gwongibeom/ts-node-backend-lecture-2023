import mongoose from 'mongoose'

const password = '1x1XL5wpRSyqqEGE'
const rawConnectString = 'mongodb+srv://k201gun:<password>@cluster0.aom6l1d.mongodb.net/?retryWrites=true&w=majority'

const connectString = rawConnectString.replace('<password>', password)
console.log(connectString)

async function connectDB (): Promise<void> {
  await mongoose.connect(connectString)
  console.log('db on')
}

export { connectDB }
