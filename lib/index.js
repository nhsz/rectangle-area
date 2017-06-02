/*
  The area of a rectangle is equal to A = l * w,
  where l = length and w = width
*/
'use strict'

module.exports = (length, width) => {
  if (length <= 0 || width <= 0) {
    throw new Error('Invalid input. Sides of the rectangle must be greater than 0')
  } else {
    return length * width
  }
}
