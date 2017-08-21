//AMD module
// Get and store objects that describe a Github Repo
//depends on html5 fetch api + uses ES6 methods - could benefit from a transpiler

define(['mixins/PubSub',],
  function (PubSub) {

    //create a store with some getter/setters to hold api response.
    let _store   = {
      getNodeById(id){
        //console.log("...id:",id);
        return id ? this.models[id] : null;
      },
      set collection(models){
        console.log("Repos"," store.set: ",models);
        this.models = models;
        PubSub.publish('repo:store:set',models);
      },
      add(question){
        var _id = question.id;
        this.models[_id] = question;
      }
    };

    /**
    * cherry pick props from the verbose repo objects via destructuring
    */
    let _transform = (models=[]) => {
      //console.log("_transform: ",models);
      return models.map( (model) => {
        let { id, description, language, name, owner, watchers, commits_url } = model;
        let data = {id, description, language, name, owner, watchers, commits_url};
        data.commits_url = data.commits_url.split('{/sha}')[0];
        return data;
      });
    };

    let _Mixin = {
      init() {
        //console.log("Repos"," init");
        let api_url = this.api_url;
        this.add(api_url);
      },
      add(api_url){
        //console.log("Repos"," add"," api_url:",api_url);
        fetch(api_url, {method:'get'})
          .then( (resp) => resp.json() )
          .then( (json) => _transform(json) )
          .then( (resp) => _store.collection = resp );
      },
      getNodeById(id) {
        //console.log("Questions"," getNodeById: ",id);
        return (id && _store)? _store.getNodeById(id) : null;
      },
      update(question={}) {
        //console.log("Questions"," update: ", question);
        _store.replaceNode(question);
      }
    }

    return _Mixin

  });
