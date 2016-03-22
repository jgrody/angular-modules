module.exports = angular.module('modules.model', [
  require('modules/extend').name
])
  .factory('Model', require('./model'));
