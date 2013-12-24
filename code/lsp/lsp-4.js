// Marionette.Region
// -----------------
//
// Manage the visual regions of your composite application.
// https://marionettejs.com

Marionette.Region = function(options){
  // ...
};

// Region Instance Methods
// -----------------------

_.extend(Marionette.Region.prototype, Backbone.Events, {
  // ...

  close: function(view){
    // ...

    // call 'close' or 'remove', depending on which is found
    if (view.close) { view.close(); }
    else if (view.remove) { view.remove(); }

    // ...
  },

  // ...
});
