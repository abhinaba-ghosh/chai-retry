const chai = require('chai')
const chaiRetry = require('../index') // for your case require('chai-retry')

chai.use(chaiRetry)

chai.config.retry = 5

exports.expect = chai.expect
