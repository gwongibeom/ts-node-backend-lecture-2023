import { checkString } from './string'

const phoneNumberPartRegex = /^\d{4}$/

export function checkPhoneNumber (input: unknown): input is string {
  if (!checkString(input)) return false

  const [localNumber, frontNumber, backNumber] = input.split('-')
  if (localNumber !== '010') return false
  if (!phoneNumberPartRegex.test(frontNumber)) return false
  if (!phoneNumberPartRegex.test(backNumber)) return false
  return true
}

{
  const result = checkPhoneNumber('010-1234-1234')
  console.log('r1', result)
}

{
  const result = checkPhoneNumber('01012341234')
  console.log('r2', result)
}
