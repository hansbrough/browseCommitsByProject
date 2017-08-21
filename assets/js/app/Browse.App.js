//Define an AMD module

define([
  'mixins/PubSub',
  'app/Repos',
  'app/Views/ReposView',
  'app/Commits',
  'app/Views/CommitsView'
  ],
  function (PubSub, Repos, ReposView, Commits, CommitsView) {
    let _RPS = Object.create(Repos, {'api_url':{value:'https://api.github.com/orgs/netflix/repos'}});
    let _CMTS = Object.create(Commits);
    
    let _App  = {
      el:'.browse-app',

      init(options){
        //console.log("BrowseApp"," init");
        this.views = {repos:Object.create(ReposView),commits:Object.create(CommitsView)};

        //start views
        for(i in this.views){
          this.views[i].init()
        }

        _RPS.init();

        //mediate some events
        PubSub.subscribe('repo:item:click', _CMTS.add );
      }
    };

  return _App;
});
