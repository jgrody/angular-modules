module.exports = function($filter){
  "ngInject";
  return function(date, format) {
    if (format === "dateOnly") {
      return $filter('date')(date, "MMM d, yyyy");
    } else if (format === "timeOnly") {
      return $filter('date')(date, "h:mm a");
    } else {
      return $filter('date')(date, "MMM d, yyyy 'at' h:mm a");
    }
  };
}
