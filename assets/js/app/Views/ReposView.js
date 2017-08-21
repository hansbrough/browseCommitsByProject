//AMD module
//View for an orgs repo's

define([
  'mixins/PubSub',
  'handlebars',
  'text!'+_baseUrl+'/assets/js/app/templates/repo.tmpl?noext',
],
  function (PubSub, Handlebars, RepoTemplate) {

    let _View = {
      init() {
        //console.log("ReposView"," init");
        this.el = document.getElementById('repo_list');
        this.template = Handlebars.compile(RepoTemplate);
        PubSub.subscribe('repo:store:set', this.render.bind(this) );//intial data load
      },
      render(models=[]) {
        //console.log("ReposView"," render: ", models);
        this.el.innerHTML = this.template(models);
      }
    }

    return _View

  });
