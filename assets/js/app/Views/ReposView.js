//AMD module
//View for an orgs repo's

define([
  'mixins/PubSub',
  'handlebars',
  'text!'+_baseUrl+'/assets/js/app/templates/repo.tmpl?noext',
],
  function (PubSub, Handlebars, RepoTemplate) {
    const RE_REPO_LINK = /repo-commits/;

    let _View = {
      init() {
        //console.log("ReposView"," init");
        this.el = document.getElementById('repo_list');
        this.template = Handlebars.compile(RepoTemplate);
        PubSub.subscribe('repo:store:set', this.render.bind(this) );//intial data load
        this.delegateEvts();
      },
      delegateEvts(){
        //console.log("delegateEvts:");
        this.el.addEventListener('click',function(e){
          e.preventDefault();
          if(RE_REPO_LINK.test(e.target.className)){
            console.log("click:",e.target.className)
            PubSub.publish('repo:item:click',e.target);
          }
        },false);
      },
      render(models=[]) {
        //console.log("ReposView"," render: ", models);
        this.el.innerHTML = this.template(models);
      }
    }

    return _View

  });
