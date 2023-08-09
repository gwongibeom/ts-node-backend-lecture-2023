import { connectDB } from './db'
import { startSever } from './server'

async function main (): Promise<void> {
  await connectDB()
  await startSever()
}

main().catch(console.error)
