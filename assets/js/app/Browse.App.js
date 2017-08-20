//Define an AMD module

define([
  'mixins/PubSub'
  ],
  function (PubSub) {

    var _App  = {
      el:'.browse-app',

      init(options){
        //this.$el = $(this.el);
        console.log("BrowseApp"," init");
      }
    };

  return _App;
});
