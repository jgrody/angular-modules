module.exports = angular.module('modules.sanitize', [
  'ngSanitize'
])
  .directive("sanitized", require('./directive'))
  .controller("SanitizedController", require('./controller'))
