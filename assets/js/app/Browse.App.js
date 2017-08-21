//Define an AMD module

define([
  'mixins/PubSub',
  'app/Repos',
  'app/Views/ReposView'
  ],
  function (PubSub, Repos, ReposView) {
    let _RPS = Object.create(Repos, {'api_url':{value:'https://api.github.com/orgs/netflix/repos'}});

    let _App  = {
      el:'.browse-app',

      init(options){
        //console.log("BrowseApp"," init");
        this.views = {repos:Object.create(ReposView)};

        //start views
        for(i in this.views){
          this.views[i].init()
        }

        _RPS.init();




      }
    };

  return _App;
});
