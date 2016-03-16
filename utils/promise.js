module.exports.onStateChange = function(callbacks) {
  return function(value) {
    if (!value) {
      callbacks.off();
      return;
    }

    callbacks.on();

    value['finally'] && value['finally'](function() {
      callbacks.off();
    });
  };
};