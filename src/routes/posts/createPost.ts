/** @file 새로운 글작성 API */

import { Request, Response } from 'express'
import Post from '../../Models/Post'
import * as validate from '../../validate'

const path = '/post'
const method = 'post'
const handler = async (req: Request, res: Response): Promise<Response> => {
  if (req.session._id === undefined) {
    return res.status(401).json({
      errorCode: 'Unauthrized',
      message: '로그인이 되어 있지 않습니다.'
    })
  }

  const { title, content } = req.body

  if (!validate.checkString(title, [2, 20])) {
    return res.status(400).json({
      errorCode: 'ValidationError',
      errorMessage: '"title" 문제가 있습니다.'
    })
  }

  if (!validate.checkString(content, [2, 20])) {
    return res.status(400).json({
      errorCode: 'ValidationError',
      errorMessage: '"content" 문제가 있습니다.'
    })
  }
  const post = await Post.create({
    title,
    content,
    authorId: req.session._id
  })
  return res.json(post)
}

export { path, method, handler }
