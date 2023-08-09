/** @file 유저정보 조회 */
import { Request, Response } from 'express'
import User from './User'
export const path = '/users'
export const method = 'get' // get post put

export const handler = (req: Request, res: Response): void => {
  User.find({
  }).then((userList) => {
    res.json(userList)
  }).catch(err => {
    console.log(err)
  })
  console.log(2)
}
