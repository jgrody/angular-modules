module.exports = function($scope, $sce){
  "ngInject";

  $scope.html = $sce.trustAsHtml($scope.sanitized);

  // Once a value goes through the sanitizer it stops updating the DOM.
  // This allows values to be dynamically updated.
  $scope.$watch("sanitized", function(newContent){
    $scope.html = $sce.trustAsHtml(newContent);
  });
}
