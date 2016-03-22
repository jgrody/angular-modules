module.exports = function(){
  "ngInject";

  return function(protoProps, staticProps){
    var parent = this;
    var child;

    if (protoProps && Object.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    Object.merge(Object.merge(child, parent), staticProps);

    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    if (protoProps) Object.merge(child.prototype, protoProps);

    child.__super__ = parent.prototype;

    return child;
  }
}
