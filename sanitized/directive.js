module.exports = function() {
  "ngInject";

  return {
    templateUrl: '/angular-modules/sanitized/template.html',
    scope: { sanitized: '=' },
    controller: 'SanitizedController'
  }
}