# angularjs-simple-base

This project is meant to serve as a common codebase for anyone wanting to mix **AngularJS and Bootstrap** to power up an interactive web application. It relies on **Brunch** to build the application, uses **npm** and **bower** as package managers, sass as the css engine and a few more things. 

Out of the box, this tiny project includes

  - Preloader.
  - Loading bar for anything needing HTTP request/response (thanks to the awesome angular-loading-bar
  - Dynamic inclusion of sources thanks to Angular UI Router and OC Lazy Load modules.
  - A visual notifications system (app.core.notify package). 
  - Easy settings and route definitions. 
  - All-around visibility over the application's state and others thanks to what's done and setup in our core application (no longer need to inject $state and $stateParams, just include $rootScope and you're all set!).
  - There could be some magic I'm forgetting... sorry. This is a template, yet is still a work in progress.

## How do I use it?

To build this package, just do **npm install | brunch b**. That'll do its magic and get you all setup. If you want to develop-build-test in a single shot, fire up a console and do **brunch w --server** to get things compiled really quickly as you code.

## Production?

Yeah, want to do this for production usage? Just **brunch b --prodution** it and tie your server to the dist folder that just got created. Easy? Yeah, mostly thanks to **Brunch**


Got suggestions? Improvements? Sure thing, just drop an issue and I'll do my best to get it done. 

Thanks, enjoy and happy coding!


   [Brunch]: <http://brunch.io/>
