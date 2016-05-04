module.exports = function(){
  return {
    template: require('./template.html'),
    transclude: true,
    scope: {
      messageFor: '=errorMessages',
      field: '@?'
    }
  }
}
