module.exports = function(){
  "ngInject";
  return function(date, format) {
    if (format === "dateOnly") {
      return $filter('date')(date, "MMM d, yyyy");
    } else {
      return $filter('date')(date, "MMM d, yyyy 'at' h:mm a");
    }
  };
}