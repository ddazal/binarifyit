function testArg (arg, message) {
  if (typeof arg !== 'number' || arg < 0 || !Number.isInteger(arg)) {
    throw new Error(message)
  }
}

module.exports = function binarifyit (number, bits = 0) {
  testArg(number, 'First param must be a positive integer')
  testArg(bits, 'Second param must be a positive integer')

  let binary = number.toString(2)
  const size = binary.split('').length

  if (size < bits) {
    binary = binary.split('')
    for (let i = 0; i < bits - size; i++) {
      binary.splice(0, 0, '0')
    }
    return binary.join('')
  }

  return binary
}
