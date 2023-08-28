/** @file 로그인 API */

import { Request, Response } from 'express'
// import User from '../Models/User'
// import { encryptPassword } from '../utils/encryptPassword'

const path = '/logout'
const method = 'post'
const handler = async (req: Request, res: Response): Promise<void> => {
  delete req.session._id
  return res.redirect('/')
}

export { path, method, handler }
