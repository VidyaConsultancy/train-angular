console.log('hello world!');

// Consumer
// Producer

/**
 * 
 *           Pull      Push
 * Single    Fun       Promise
 * Multiple  GenFun    Observable
 * 
 */

// function
function foo() {
  return 'bar';
}

console.log(foo());

// promise
// pending
// resolve/fullfilled
// reject/fullfilled
const promise = new Promise((resolve, reject) => {
  resolve();
  reject(new Error('rejected'));
  resolve(2);
})

// promise handling
// async await
promise
  .then(v => console.log('resolved value', v))
  .catch(error => console.error(error))

async function handlePromise() {
  try {
    const res = await promise;
  } catch (error) {

  }
}

// generator function
function* gen() {
  console.log('first');
  yield 1;
  console.log('second');
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const genObj = gen();
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())

for (const value of genObj) {
  console.log('iterator value', value);
}