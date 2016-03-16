module.exports = function() {
  "ngInject";

  return {
    templateUrl: '/modules/sanitized/template.html',
    scope: { sanitized: '=' },
    controller: 'SanitizedController'
  }
}