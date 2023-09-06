/** @file 메인페이지 HTML 조회 API */

import { Request, Response } from 'express'
import * as validate from '../../validate'
import Post from '../../Models/Post'
import User from '../../Models/User'

const path = '/'
const method = 'get'
const handler = async (req: Request, res: Response): Promise<void> => {
  console.log('main called')
  let { page: pageString = '1', limit: limitString = '10' } = req.query

  if (!validate.checkString(pageString)) {
    pageString = '1'
  }

  if (!validate.checkString(limitString)) {
    limitString = '10'
  }

  const page = parseInt(pageString)
  const limit = parseInt(limitString)

  const postList = await Post.find().skip((page - 1) * limit).limit(limit)

  const totalPageCount = await Post.countDocuments()
  const lastPage = Math.ceil(totalPageCount / limit)

  const user = await User.findOne({ _id: req.session._id })

  return res.render('main', { postList, page, lastPage, user })
}

export { path, method, handler }
