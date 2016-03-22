"use macros";

module.exports = function(Extend) {
  "ngInject";
  
  function Model(data, options) {
    data = data || {};
    this.options = options || {};
    this.initialize(data);
  }

  Object.merge(Model.prototype, {
    initialize: function(data) {
      this.attrs = Object.extended();
      this._resetData = Object.extended();
      this.set(data, { reset: true });
    },

    reset: function() {
      this.set(this._resetData);
    },

    set: function(data, options) {
      this.attrs.merge(data, true);

      if (options && options.reset) {
        this._resetData.merge(this.attrs, true);
      }
    },

    toJson: function() {
      return this.attrs;
    },

    toggle: function(property) {
      this[property] = !this[property];
    },

    hasChanged: function() {
      var self = this;
      var args = Array.prototype.slice.call(arguments);
      return args.any(function(attr){
        return self.attrs[attr] != self._resetData[attr];
      });
    },

    sync: function() {
      this.set(this.attrs, { reset: true });
    }
  });

  Model.extend = Extend;

  return Model;
};
