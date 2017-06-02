import test from 'ava'
import rectangleArea from '../lib'

test('Test 1', t => {
  t.is(rectangleArea(2.5, 4.37), 10.925)
})

test('Test 2', t => {
  t.is(rectangleArea(1, 1), 1)
})

test('Test 3', t => {
  t.is(rectangleArea(7, 3), 21)
})

test('Test 4', t => {
  t.is(rectangleArea(3, Math.PI), 9.42477796076938)
})

test('Test 5: zero length', t => {
  const error = t.throws(() => {
    rectangleArea(0, 78)
  }, Error)

  t.is(error.message, 'Invalid input. Sides of the rectangle must be greater than 0')
})

test('Test 6: negative width', t => {
  const error = t.throws(() => {
    rectangleArea(1, -1)
  }, Error)

  t.is(error.message, 'Invalid input. Sides of the rectangle must be greater than 0')
})
