import { connectDB } from './db'
import { startSever } from './sever'

async function main (): Promise<void> {
  await connectDB()
  await startSever()
}

main().catch(console.error)
