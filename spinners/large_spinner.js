function largeSpinner($parse) {
  "ngInject";

  return {
    restrict: 'A',
    template: '<a class="large-spinner" data-us-spinner="spinnerOptions"></a>',
    scope: true,
    link: function($scope, element, attrs) {
      var defaultOptions = {radius:14, width:6, length:8};
      var options = $parse(attrs.largeSpinner)($scope);
      $scope.spinnerOptions = Object.merge(defaultOptions, options);
    }
  };
};

module.exports = largeSpinner;
