const { expect } = require('./chai')

describe('Check the chai retry', function () {
  it('this should fail after 10 times', function () {
    // expect('Bill').to.be.equals('Steve')

    // you can use any assertions :)
    expect(true).to.be.false
  })
})
