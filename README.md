# chai-retry

A chai plugin to retry assertions.

It has been a common problem with chai assertions that get failed due to the asynchronous behavior of an API/Web. Mocha somehow manage the problem with retries the whole function. But, what if chai itself be the smarter guy and retry its assertions on its own? This plugin will help you exactly achieve the same.

## Install the plugin

```ssh
npm i --save-dev chai-retry
```

## Configuration

```js
const chaiRetry = require('chai-retry')
chai.use(chaiRetry)

chai.config.retry = 20 // will retry same assertion for 20 times, defaults to 10
chai.config.interval = 5000 // the polling interval in ms between each retry, defaults to 2000 ms
```

## Usage

Once the configuration is set, you can perform any native chai assertion. Each assertion will be retried for specified retry count in case assertion is getting failed. As soon as the assertion gets passed, it will break the chain and the feedback. So, this plugin will retry the assertion when and only when the assertion gets failed.

## Demo

![demo](./docs/chai-retry.gif)

## Tell me your issues

you can raise any issue [here](https://github.com/abhinaba-ghosh/chai-retry/issues)

## Contribution

Pull requests are welcome.

If it works for you , give a [Star](https://github.com/abhinaba-ghosh/chai-retry)!

_- Copyright &copy; 2020- [Abhinaba Ghosh](https://www.linkedin.com/in/abhinaba-ghosh-9a2ab8a0/)_
