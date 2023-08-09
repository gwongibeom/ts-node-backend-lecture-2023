import { checkString } from './string'

const emailFrontRegex = /^[0-9a-zA-Z_]{4,20}$/

export function checkSchoolEmail (input: unknown): input is string {
  if (!checkString(input)) return false

  const [frontEmail, backEmail] = input.split('@')
  if (backEmail !== 'sdh.hs.kr') return false
  if (!emailFrontRegex.test(frontEmail)) return false
  return true
}

{
  const result = checkSchoolEmail('123asdASD_@sdh.hs.kr')
  console.log('r1', result)
}
