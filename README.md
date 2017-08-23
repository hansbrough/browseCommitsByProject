## Browse Commits By Project

A simple interactive UI to display a list of an arbitrary user-specified organization's GitHub projects ranked by any meaningful metric you'd like, and allow the user to browse recent commits on that project.

[Live on Github Pages](https://hansbrough.github.io/browseCommitsByProject/) (no need to run locally)

### Feature Notes

* Loads with list of Netflix repos
* Use search input to get repos for a different organization e.g. twitter, linkedin, google etc
* click repo name to view commits
* default repo sorting is alpha ascending
* change repo sort to decending by forks or watcher counts

### File Structure
* Using Github Pages/ Jekyll for convenience - so some files associated with that set up and not relevant to project - ex. 'Gemfile'
* Clientside files (js, css etc) located in `/assets`
* scss located in `_sass\` which is a convenience set up by jekyll


### Approach
* minimal use of outside libraries - just Handlebars and requirejs
* markup skeleton delivered w/page load. content inserted/change via client templates.
* Custom 'Model' objects encapsulate data store and methods for each of the Github api's used. For example a 'Repos' object fetches a given org's repos, transforms, and stores response json in an internal hash.
* Keep objects loosely coupled with custom event messaging / PubSub
* 'View' objects responsible for rendering in response to data store change events ('set', 'sort')
* Top level App object helps by mediating events so that 'Models' subscribe to nada
* Tried to avoid brittle prototypal class hierarchies by using a mixin pattern.

### TODOS
* several optimizations marked in js - `/assets/js`
* sync sort state in UI when user searches for a new repo. for example if u sort the Netflix repos by 'watchers' then search for twitter
 the returned repos will be alpha order but sortable widget UI stays on 'watchers'. Alternatively just display repos in 'watchers' order.
* Display message in UI when an invalid organization is submitted via search input
* default select first repo in list, + display assoc commits
* add currently selected repo name to display in topbar area
* use lib like moment.js to format datetime string
* constrain height of page container and force nav / body to scroll
* bigger select target for repo links. better styling on select
* run a transpiler to port es6 syntax to older browsers
