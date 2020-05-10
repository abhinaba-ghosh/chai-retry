module.exports = function(chai, util) {
  const AssertionError = chai.AssertionError,
    flag = util.flag,
    config = chai.config;

  chai.Assertion.prototype.assert = function(
    expr,
    msg,
    negateMsg,
    expected,
    _actual,
    showDiff,
    retry = chai.config.retry || 10,
    pollInterval = chai.config.interval || 2000
  ) {
    var ok = util.test(this, arguments);

    if (true !== showDiff) showDiff = false;
    if (true !== config.showDiff) showDiff = false;

    while (!ok && retry !== 0) {
      console.log(`retrying assertion ${retry} more time...`);
      ok = util.test(this, arguments);
      retry = retry - 1;
      sleepFor(pollInterval);
    }

    if (!ok) {
      var msg = util.getMessage(this, arguments),
        actual = util.getActual(this, arguments);
      throw new AssertionError(
        msg,
        {
          actual: actual,
          expected: expected,
          showDiff: showDiff
        },
        config.includeStack ? this.assert : flag(this, 'ssfi')
      );
    }
  };

  function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
      /* do nothing */
    }
  }
};
