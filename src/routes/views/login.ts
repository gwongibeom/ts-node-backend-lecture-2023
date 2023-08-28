/** @file 메인페이지 HTML 조회 API */

import { Request, Response } from 'express'
// import * as validate from '../../validate'
// import Post from '../../Models/Post'

const path = '/login'
const method = 'get'
const handler = async (req: Request, res: Response): Promise<void> => {
  return res.render('login')
}

export { path, method, handler }
