/** @file 회원가입 API 정보파일 */
import { Request, Response } from 'express'

export const path = '/signup'
export const method = 'post' // get post put

export const handler = (req: Request, res: Response): Response => {
  return res.send('Hello, World!')
}
