//AMD module
//View for a repo's commits

define([
  'mixins/PubSub',
  'handlebars',
  'text!'+_baseUrl+'/assets/js/app/templates/commit.tmpl?noext',
],
  function (PubSub, Handlebars, CmtTemplate) {
    const RE_CMT_LINK = /commit-details/;

    let _View = {
      init() {
        console.log("CommitsView"," init");
        this.el = document.getElementById('commits_list');
        this.template = Handlebars.compile(CmtTemplate);
        PubSub.subscribe('commits:store:set', this.render.bind(this) );
        //this.delegateEvts();
      },
      delegateEvts(){
        //console.log("delegateEvts:");
        this.el.addEventListener('click',function(e){
          e.preventDefault();
          if(RE_CMT_LINK.test(e.target.className)){
            console.log("click:",e.target.className)
            PubSub.publish('cmt:item:click',e.target);
          }
        },false);
      },
      render(models=[]) {
        console.log("CmtsView"," render: ", models);
        this.el.innerHTML = this.template(models);
      }
    }

    return _View

  });
