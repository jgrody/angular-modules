module.exports = angular.module('modules.spinners', ['angularSpinner'])
  .directive('smallSpinner', require('./small_spinner'))
  .directive('largeSpinner', require('./large_spinner'))
  .directive('spinner', require('./spinner'));
