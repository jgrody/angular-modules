module.exports = angular.module('modules.progress', [
  'ngMaterial'
])
  .directive("showProgress", function(){
    return {
      templateUrl: '/modules/progress/template.html',
      scope: { show: '=showProgress' }
    }
  })
