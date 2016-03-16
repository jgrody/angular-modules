function smallSpinner($parse) {
  "ngInject";
  
  return {
    restrict: 'A',
    template: '<a class="small-spinner" data-us-spinner="spinnerOptions"></a>',
    scope: true,
    link: function($scope, element, attrs) {
      var defaultOptions = {radius:7, width:3, length:4};
      var options = $parse(attrs.smallSpinner)($scope);
      $scope.spinnerOptions = Object.merge(defaultOptions, options);
    }
  };
};

module.exports = smallSpinner;
