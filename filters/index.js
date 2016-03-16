module.exports = angular.module('modules.filters', [
  'ngSanitize'
])
  .filter('dateFilter', require('./date'))