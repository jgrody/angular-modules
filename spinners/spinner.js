var onStateChange = require('../utils/promise').onStateChange;

// function replaceModalFocus(){
//   if ($('.modal-open').length && $('.modal:visible').length) {
//     $('.modal:visible').focus();
//   }
// }

module.exports = function() {
  return {
    templateUrl: '/modules/spinners/template.html',
    transclude: true,
    scope: true,
    link: function($scope, element, attrs) {
      $scope.size = attrs.size;

      $scope.displayClass = function() {
        var classes = {
          'position-relative': $scope.showSpinner,
          'clearfix': $scope.showSpinner,
        };
        var displayClass = attrs.display ? 'display-' + attrs.display : 'display-inline-block';
        classes[displayClass] = true;
        return classes;
      };

      $scope.$watch(attrs.spinner, onStateChange({
        on: function() {
          $scope.showSpinner = true;
          element.addClass('spinner-visible');

          // When a spinner is activated, often elements on the page are hidden/shown
          // causing the keyboard to lose focus of the proper location in many instances,
          // particularly modals. This is here to set the keyboard focus to the modal div
          // when a spinner is activated thereby maintaining keyboard focus in the modal
          // and allowing the user to still navigate within it.
          // replaceModalFocus();
        },
        off: function() {
          $scope.showSpinner = false;
          element.removeClass('spinner-visible');
        }
      }));
    }
  };
};
