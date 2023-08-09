/** @file 회원가입 API 정보파일 */
import { Request, Response } from 'express'
import User from './User'
export const path = '/signup'
export const method = 'post' // get post put

export const handler = (req: Request, res: Response): Response => {
  User.create({
    name: '권기범',
    age: 17,
    gender: '아파치',
    id: 'gwon',
    password: 'qwer1234',
    phoneNumber: '010-1234-1234',
    friendsNumber: 5,
    inflowPath: 'idk',
    houseAddress: '평양시'
  }).then(() => {
    console.log('create done.')
  }).catch(err => {
    console.log(err)
  })
  console.log(2)
  return res.send('Hello, World!')
}
