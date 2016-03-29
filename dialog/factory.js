module.exports = function($mdDialog){
  "ngInject";

  var defaultOptions = {
    escapeToClose: true,
    clickOutsideToClose: true
  }

  return {
    show: function(options){
      return $mdDialog.show(angular.extend({}, defaultOptions, options));
    },

    confirm: function(){
      return $mdDialog.confirm();
    },

    hide: function(){
      return $mdDialog.hide();
    }
  }
};
