import assert from 'assert'
import { add } from './myLib.mjs'

console.log('add()\n Should add two numbers')

try {
    assert.strictEqual(add(1, 2), 3)
    console.log('SUCCESS')
} catch (e) {
    console.log('FAIL');
    console.error(e);
}