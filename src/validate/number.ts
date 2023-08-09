export function checkNumber (input: unknown): input is string {
  if (typeof input === 'number') {
    return true
  }
  return false
}
